import Chat from "./Chat";

const Chatcomp = () => {
  return (
    <div className='bg-[#a7bcff] h-[90vh] flex items-center justify-center '>
      <div className='w-[65%] h-[80%] border-2 flex flex-row overflow-hidden rounded-2xl'>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default Chatcomp;