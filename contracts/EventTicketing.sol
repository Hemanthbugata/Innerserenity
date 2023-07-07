// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract EventTicketing is ERC1155URIStorage, Ownable {
    using Counters for Counters.Counter;
      using SafeMath for uint256;
    Counters.Counter private _ticketIds;
    string public name;
    string public symbol;

    struct Ticket {
        uint256 id;
        address creator;
        uint256 totalSupply;
        uint256 availableSupply;
        uint256 price;
        uint256 saleStart;
        uint256 saleEnd;
        string metadataURI;
    }

    mapping(uint256 => Ticket) public tickets;

    event TicketCreated(
        uint256 indexed ticketId,
        address indexed creator,
        uint256 totalSupply,
        uint256 price,
        uint256 saleStart,
        uint256 saleEnd,
        string metadataURI
    );

    event TicketBought(
        uint256 indexed ticketId,
        address indexed buyer,
        uint256 quantity,
        uint256 amount
    );

    constructor(string memory baseURI) ERC1155(baseURI) {
        name = "InnerSerenity Events";
        symbol = "InnSer";
    }

    function createTicket(
        uint256 totalSupply,
        uint256 price, // Accept price in wei
        uint256 saleStart,
        uint256 saleEnd,
        string memory metadataURI
    ) public {
        require(totalSupply > 0, "Total supply must be greater than 0");
        require(price > 0, "Price must be greater than 0");
        // require(saleStart > block.timestamp, "Sale start time must be in the future");
        require(saleEnd > saleStart, "Sale end time must be after sale start time");
        _ticketIds.increment();
        uint256 ticketId = _ticketIds.current();
        _mint(msg.sender, ticketId, totalSupply, "");
        _setURI(ticketId, metadataURI);
        tickets[ticketId] = Ticket(
            ticketId,
            msg.sender,
            totalSupply,
            totalSupply,
            price, 
            saleStart,
            saleEnd,
            metadataURI
        );
        emit TicketCreated(
            ticketId,
            msg.sender,
            totalSupply,
            price, 
            saleStart,
            saleEnd,
            metadataURI
        );
    }


    function buyTicket(uint256 ticketId, uint256 quantity) public payable {
        Ticket memory ticket = tickets[ticketId];
        require(
            block.timestamp >= ticket.saleStart &&
                block.timestamp <= ticket.saleEnd,
            "Sale not active"
        );
        require(
            ticket.availableSupply >= quantity,
            "Not enough tickets available"
        );
        require(
            quantity == uint256(quantity), // Check if quantity is an integer
            "Quantity must be an integer"
        );
        require(
            msg.value % ticket.price == 0, // Check if msg.value is a multiple of the ticket price
            "Incorrect payment amount"
        );

        _safeTransferFrom(ticket.creator, msg.sender, ticketId, quantity, "");

        ticket.availableSupply -= quantity;
        tickets[ticketId] = ticket;

        payable(ticket.creator).transfer(msg.value);

        emit TicketBought(ticketId, msg.sender, quantity, msg.value);
    }


    function setTokenURI(uint256 ticketId, string memory uri) public onlyOwner {
        _setURI(ticketId, uri);
    }

    function getUnsoldTickets() public view returns (Ticket[] memory) {
        uint256 numUnsoldTickets = 0;
        // Count the number of unsold tickets.
        for (uint256 i = 1; i <= _ticketIds.current(); i++) {
            if (tickets[i].availableSupply > 0) {
                numUnsoldTickets++;
            }
        }
        // Create a new array to hold the unsold tickets.
        Ticket[] memory unsoldTickets = new Ticket[](numUnsoldTickets);
        uint256 currentIndex = 0;
        // Add each unsold ticket to the array in reverse order.
        for (uint256 i = _ticketIds.current(); i >= 1; i--) {
            if (tickets[i].availableSupply > 0) {
                unsoldTickets[currentIndex] = tickets[i];
                currentIndex++;
            }
        }
        return unsoldTickets;
    }


    function getMyEvents() public view returns (Ticket[] memory) {
        uint256 numMyEvents = 0;
        // Count the number of events created by msg.sender.
        for (uint256 i = 1; i <= _ticketIds.current(); i++) {
            if (tickets[i].creator == msg.sender) {
                numMyEvents++;
            }
        }
        // Create a new array to hold the events created by msg.sender.
        Ticket[] memory myEvents = new Ticket[](numMyEvents);
        uint256 currentIndex = 0;
        // Add each event created by msg.sender to the array.
        for (uint256 i = _ticketIds.current(); i > 0; i--) {
            if (tickets[i].creator == msg.sender) {
                myEvents[currentIndex] = tickets[i];
                currentIndex++;
            }
        }
        return myEvents;
    }

    function getMyTickets() public view returns (Ticket[] memory) {
        uint256 numMyTickets = 0;
        // Count the number of tickets bought by the msg.sender.
        for (uint256 i = 1; i <= _ticketIds.current(); i++) {
            if (balanceOf(msg.sender, i) > 0 && tickets[i].creator != msg.sender) {
                numMyTickets++;
            }
        }
        // Create a new array to hold the tickets bought by the msg.sender.
        Ticket[] memory myTickets = new Ticket[](numMyTickets);
        uint256 currentIndex = 0;
        // Add each ticket bought by the msg.sender to the array.
        for (uint256 i = _ticketIds.current(); i > 0; i--) {
            if (balanceOf(msg.sender, i) > 0 && tickets[i].creator != msg.sender) {
                myTickets[currentIndex] = tickets[i];
                currentIndex++;
            }
        }
        return myTickets;
    }
    
}