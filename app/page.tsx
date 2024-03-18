import Image from "next/image";
import {SettingsIcon} from "lucide-react";
import Messages from "../components/messages";
import Recorder from "../components/Recorder";

export default function Home() {
  return (
    <main className="bg-black h-screen overflow-y-auto">
      <h1> lets build an ai assistant</h1>

      {/* header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5" >
        <Image
          src="https://i.imgur.com/MCHWJZS.png"
          alt="ai"
          width={50}
          height={50}
          className="object-contain"
        />
        
        <SettingsIcon size={40}
        className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black transition-all ease-in-out duration-300 hover:bg-purple-700 hover:text-white"
        />
      </header>

      {/* form */}
      <form 
      className="flex flex-col bg-black"
      action="">
        <div className="flex-1 bg-gradient-to-b from-purple-500 to-black"> {
          // messages
          <Messages /> 
          }</div>

          <input type="file" hidden />
          <button type ="submit" hidden/>

          <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
            {/* recorder */}

            <Recorder />
            
            <div>
               {/* voice synthesizer */}


            </div>
           
          </div>
      </form>

    </main>
  );
}
