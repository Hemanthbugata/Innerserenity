# Innerserenity-
A mental health decentralized application 
<div align="center">
  <h1>InnerSerenity</h1>
  <p>
    <strong>Empowering Minds, Healing Hearts - Your Gateway to Mental Well-being in the Digital Age</strong>
  </p>
  
</div>

InnerSerenity is a decentralized application (DApp) dedicated to promoting mental well-being and providing accessible, confidential, and personalized mental health support. By harnessing the power of blockchain technology, InnerSerenity revolutionizes the mental health landscape, empowering individuals to embark on a journey towards inner peace and serenity.

The DApp begins with the creation of user profiles, where individuals can provide pertinent information about themselves, including their name, age, and gender. These profiles enable mental health professionals to gain valuable insights into their users' backgrounds, helping them tailor their approach and provide personalized support that aligns with the users' unique needs. Professionals, in turn, create comprehensive profiles highlighting their expertise, qualifications, and specialization areas. This allows users to search for professionals based on specific criteria, such as specialization, therapeutic approach, or treatment modality, ensuring they find the most suitable match to address their mental health concerns.

Once users find a professional aligned with their requirements, InnerSerenity facilitates the appointment process, streamlining scheduling and eliminating administrative burdens. Users can request appointments, and professionals can accept or decline based on their availability, ensuring efficient and timely support. InnerSerenity also incorporates a rating system, empowering users to provide feedback and rate the professionals they engage with. This feedback loop promotes accountability, quality improvement, and transparency, benefiting both professionals and users in their mental health journey. The platform also incorporates a unique event ticketing feature, where specialized professionals can organize transformative events and issue ERC1155 tokens to participants. These events foster personal growth, enlightenment, and self-discovery, offering a holistic approach to mental well-being.


# Features
* **User Profiles:** Users can create profiles by providing their name, age, and gender. This information helps professionals understand their users better.
* **Professional Profiles:** Mental health professionals can create profiles by specifying their name and specialization. This feature allows users to search for professionals based on their specific needs.
* **Search Professionals:** Users can search for professionals based on specialization. This functionality helps users find the most suitable professional to address their mental health concerns.
* **Appointment Requests:** Users can request appointments with professionals they are interested in. Professionals have the option to accept or decline these appointment requests based on their availability.
* **Secure Conversations:** Once an appointment is confirmed, users and professionals can engage in secure conversations. The DApp ensures that only the participating users and professionals have access to the conversation.
* **Messaging:** Users and professionals can exchange messages within their conversations. This feature enables effective communication and the sharing of important information related to mental health.
* **Professional Ratings:** After a session, users can rate professionals based on their experience. The rating system helps maintain accountability and provides valuable feedback for professionals to improve their services.
* **Organize Event:** Specialized professionals can organize transformative events and issue ERC1155 tokens to participants, facilitating personal growth, enlightenment, and self-discovery.

# Architecture

![image](https://github.com/K1297/InnerSerenity/assets/102855092/8a37de35-32f6-44c3-b52f-a1b00e2bee5c)


## Components

* **Frontend:** frontend of InnerSerenity is responsible for providing users with an intuitive and interactive user interface to access the DApp's features.
* **Sign in with metamask:** InnerSerenity integrates the "Sign in with MetaMask" feature, which allows users to securely authenticate and interact with the DApp using their MetaMask wallet.
* **Backend:** The backend of InnerSerenity handles the server-side operations and serves as the intermediary between the frontend and other external services. It manages user authentication, handles data storage and retrieval and communication with other components.
* **DynamoDB:** DynamoDB is utilized as the database system within InnerSerenity's backend.
* **InnerSerenity Smart contract:** The InnerSerenity Smart Contract is deployed on the Fantom blockchain. It implements the core functionalities and logic of InnerSerenity, including user profile management, professional registration, appointment requests, conversations, and the rating system.
* **Event Ticketing Smart Contract:** The Event Ticketing smart contract facilitates the seamless organization and distribution of event tickets while ensuring transparency and security through the power of blockchain technology. This smart contract allows professionals specializing in various fields to create and issue ERC1155 tokens as event tickets.

# Local Installation
* clone the repository 
```
 git clone https://github.com/suraj719/innerserenity.git
```

* change to server directory and install all the dependencies
```
cd server
npm install
```

* create a .env file and add your AWS account details which you can find in security credentials -> access key
```
  AWS_ACCESS_KEY_ID = "paste your aws access key_id
  AWS_SECRET_ACCESS_KEY = "paste your aws_secret_access_key
```
* Copy and rename a `.env.example` file into `.env` file and add your PRIVATE_KEY and FTMSCAN_API_KEY.
```
PRIVATE_KEY = paste Your wallet private key
FTMSCAN_API_KEY = paste Your Fantom Scan API key
```

* Now, start the server

```
npm start
```

* Now, go to client directory and install the dependencies

```
npm install
```
* Compile the smart contracts
```
npm run compile
```

* create a .env file and add backend url(which we created just now in port 8000)

```
VITE_APP_BACKEND_URL = "http://localhost:8000
```

* start the server by using npm run dev, and the server will be started on port 5173
Go to
```
http://localhost:5173/` to access the app
```
* Deploy & Verify smart contracts on Fantom mainnet
```
npm run deploy
```

* Deploy & Verify smart contracts on Fantom testnet
```
npm run deploy-testnet
```

* Check the deployed smart contract addresses in the /contract_addresses/address_ftm.md

# Usage

* User profiles with personalized information for a comprehensive understanding of user needs.
* Professional profiles highlighting expertise and specialization.
* Search functionality to find professionals based on specific mental health requirements.
* Appointment request system for streamlined scheduling.
* Conversations to ensure secure and confidential communication.
* Rating system to provide feedback and continuous improvement for professionals.
* Participate in transformative events, gain insights, and explore personal growth opportunities.

# Smart Contract Documentation

## InnerSerenity DApp

The InnerSerenity DApp is a smart contract that facilitates the creation and interaction of users and professionals within the InnerSerenity platform. It allows users to create profiles, search for professionals based on specialization, request appointments, and rate professionals based on their services.

Contract Details
SPDX-License-Identifier: MIT
Solidity Version: ^0.8.6

**Structs**

**1. User**

```
struct User {
    string name;
    uint age;
    string gender;
}
```

* **name:** The name of the user.
* **age:** The age of the user.
* **gender:** The gender of the user.

**2. Professional**

```
struct Professional {
    string name;
    string specialization;
    bool available;
    uint totalRatings;
    uint totalScore;
}
```

* **name:** The name of the professional.
* **specialization:** The specialization area of the professional.
* **available:** Indicates whether the professional is available for appointments.
* **totalRatings:** The total number of ratings received by the professional.
* **totalScore:** The cumulative score of ratings received by the professional.

**State Variables**

```
mapping(address => User) public users;
mapping(address => Professional) public professionals;
address[] public professionalAddresses;
```

* **users:** A mapping that stores user profiles based on their Ethereum addresses.
* **professionals:** A mapping that stores professional profiles based on their Ethereum addresses.
* **professionalAddresses:** An array that stores the Ethereum addresses of registered professionals.

**Events**

**AppointmentRequested**

```
event AppointmentRequested(address user, address professional);
```

* **user:** The Ethereum address of the user who requested the appointment.
* **professional:** The Ethereum address of the professional for whom the appointment is requested.

**Functions**

**1. createUser**

```
function createUser(string memory _name, uint _age, string memory _gender) public
```

**2. createProfessional**

```
function createProfessional(string memory _name, string memory _specialization) public
```

**3. searchProfessionals**

```
function searchProfessionals(string memory _specialization) public view returns (address[] memory)
```

**4. requestAppointment**

```
function requestAppointment(address _professionalAddress) public
```

**5. rateProfessional**

```
function rateProfessional(address _professionalAddress, uint _score) public
```

## Event Ticketing Smart Contract

The EventTicketing smart contract enables the creation, sale, and management of event tickets as ERC-1155 tokens. It allows users to create tickets with specified details, buy tickets, manage ticket metadata, and retrieve information about unsold tickets and tickets owned by users.

**Contract Details**
SPDX-License-Identifier: MIT
Solidity Version: ^0.8.6

**Libraries Used**
The EventTicketing contract imports the following libraries from the OpenZeppelin Contracts library:

* **ERC1155URIStorage:** Extends ERC1155 to include URI management for token metadata.
* **Ownable:** Provides a basic access control mechanism with an owner address.
* **Counters:** Provides an implementation of a counter that can be incremented or decremented.
* **SafeMath:** Provides arithmetic operations with safety checks to prevent overflow/underflow errors.

**State Variables**

```
using Counters for Counters.Counter;
using SafeMath for uint256;

Counters.Counter private _ticketIds;
string public name;
string public symbol;
```

**Structs**

**Ticket**

```
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
```

* **id:** The unique identifier of the ticket.
* **creator:** The address of the ticket creator.
* **totalSupply:** The total supply of the ticket.
* **availableSupply:** The number of tickets available for sale.
* **price:** The price of each ticket in wei.
* **saleStart:** The start time of the ticket sale.
* **saleEnd:** The end time of the ticket sale.
* **metadataURI:** The URI for the metadata associated with the ticket.

**Mapping**

```
mapping(uint256 => Ticket) public tickets;
```

**Events**

**TicketCreated**

```
event TicketCreated(
    uint256 indexed ticketId,
    address indexed creator,
    uint256 totalSupply,
    uint256 price,
    uint256 saleStart,
    uint256 saleEnd,
    string metadataURI
);
```

**TicketBought**

```
event TicketBought(
    uint256 indexed ticketId,
    address indexed buyer,
    uint256 quantity,
    uint256 amount
);
```

**Constructor**

```
constructor(string memory baseURI) ERC1155(baseURI) {
    name = "InnerSerenity Events";
    symbol = "InnSer";
}
```

**Functions**

**1. createTicket**

```
function createTicket(
    uint256 totalSupply,
    uint256 price,
    uint256 saleStart,
    uint256 saleEnd,
    string memory metadataURI
) public
```

**2. buyTicket**

```
function buyTicket(uint256 ticketId, uint256 quantity) public payable
```

**3. setTokenURI**

```
function setTokenURI(uint256 ticketId, string memory uri) public onlyOwner
```

**4. getUnsoldTickets**

```
function getUnsoldTickets() public view returns (Ticket[] memory)
```

**5. getMyEvents**

```
function getMyEvents() public view returns (Ticket[] memory)
```

**6. getMyTickets**

```
function getMyTickets() public view returns (Ticket[] memory)
```

# Troubleshooting
**Metamask Login Issue**

If you are unable to sign in with Metamask, please ensure that your Metamask wallet is properly configured and has sufficient funds to pay for the transaction fees. Additionally, ensure that you are signed into Metamask and have granted permission for the dapp to access your wallet.

# Contribution Guidelines
We welcome contributions from anyone who would like to help improve our dapp.

To contribute, please follow the following steps:

1. Fork the repository to your own GitHub account: https://github.com/suraj719/innerserenity
2. Create a new branch from the main branch for your changes.
3. Make your changes and commit them with clear commit messages.
4. Push your changes to your forked repository.
5. Open a pull request to merge your changes into the main branch.

# Team Member
* Hemanth Bugata
* Kushal Sapra
* Hardik Malani
* Suraj Thammi

# Acknowledgements

We are very grateful for these organizations for their contributions to our dapp:
* Fantom community for providing the blockchain network and smart contract ecosystem that InnerSerenity runs on.
* Amazon for providing DynamoDB as the database system within InnerSerenity's backend.

