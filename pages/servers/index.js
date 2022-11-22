import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import HomeHeader from "../../components/headers/homeHeader";
import ServerCard from "../../components/ServerCard";
import Footer from "../../components/footer";

function ServerList({ servers, highpop_servers }) {
  return (
    <>
      <Head>
        <title>ARK Classic - Servers</title>
        <meta name="description" content="Welcome to Ark Classic"/>
        <meta name="keywords" content="arkclassic,ARK,Dinosaurs,PVP,Best ARK Server"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      
      <Navbar darken={true}/>

      <div className="pt-[72px] w-full">
  <div className="h-full w-full" style={{background: 'url(https://media.discordapp.net/attachments/885607142051184700/989454048660975656/unknown.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="w-full h-full bg-bgray-bg bg-opacity-80">
      <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
        <div className="my-auto flex justify-center w-full">
          <div>
            <div className="container flex flex-col items-center py-12 sm:py-24">
              <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                  <span><i className="fa-solid fa-hard-drive" /> <br />Server List</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full space-x-6 p-10">
          <div className="px-4 py-2">
          <div className="p-4 sm:p-8">
        <h3 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white text-left "><i class="fa-solid fa-circle-question"></i> How to join Steam?</h3>
        <p className="mb-5 text-base text-gray-600 dark:text-gray-100 sm:text-lg text-left ">We can help you! Follow this simple step-by-step guide to get started.
        </p>
        <p className="mb-5 text-base dark:text-gray-300 sm:text-lg text-left">
        <br/>
      Instructions for Steam are as follows:   <br/>
      Step 1: Open the Steam client.   <br/>
      Step 2: At the top left, click on View.   <br/>
      Step 3: Click on Servers and head over to the Favorites tab.   <br/>
      Step 4: Click Add Server to Favorites.   <br/>
      Step 5: Enter following Server IP below then click add this address to favorit   <br/>
      Step 6: Start Ark Survival and click Join ARK   <br/>
      Step 7: Filter for favorites and ensure all other filters are reset   <br/>
      <br/>
      The server should now visible for you   <br/>
      <br/>
      </p>
      {/*<h3 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white text-left "><i class="fa-solid fa-circle-question"></i> How to join Epic Games?</h3>
      <p className="mb-5 text-base text-gray-600 dark:text-gray-100 sm:text-lg text-left ">We can help you! Follow this simple step-by-step guide to get started.
        </p>
      <p className="mb-5 text-base dark:text-gray-300 sm:text-lg text-left">Instructions for Epic Games Store are as follows:   <br/>
      Note: The Epic Games Store version of ARK does not currently have a proper method of joining a server directly via IP/port. This is not a limitation on our part.   <br/>
      <br/>
      Step 1: Join a single-player game of ARK.   <br/>
      Step 2: Click Tab to open the console.   <br/>
      Step 3: Enter server ip below in the format of IP:PORT.   <br/>
      Step 3: Type: open SERVERIP:PORT and press enter.   <br/>
    </p>*/}
      </div>
      </div>
      <div className="mt-5">
            <h1 className="text-4xl px-4 py-2 text-left text-gray-50 font-black leading-7 md:leading-10 hidden">
                  <span><i className="fa-solid fa-star"/> Favorites </span>
                </h1>
                <p className="text-gray-300 px-4 py-2 mb-16 text-left hidden">You currently have no favorites</p> 
                <h1 className="text-4xl px-4 py-2 text-left text-gray-50 font-black leading-7 md:leading-10">
                  <span><i class="fa-solid fa-chart-area"></i> Most Popular </span>
                </h1>
                <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mb-5">
                        {highpop_servers ? <><ServerCard server={highpop_servers[0]}/>
                        <ServerCard server={highpop_servers[1]}/></>
                        : <></>}
                </div>
            <h1 className="text-4xl px-4 py-2 text-left text-gray-50 font-black leading-7 md:leading-10">
                  <span><i className="fa-solid fa-hard-drive" /> Servers </span>
                </h1>
          <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {servers.map((server) => (
                <ServerCard key={server.id} server={server}/>
            ))}
          </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  console.log("[ShadowmaneAPI] DEBUG: Fetched Server List Options");

  const res = await fetch(
    "https://arkclassic.com/api/options/serverlist_options"
  );

  const servers_res = await fetch(
    "https://arkclassic.com/api/servers"
  );

  const highpop_res = await fetch(
    "https://arkclassic.com/api/highpop_servers"
  );


  var serverlist_options = null;
  try {
    serverlist_options = await res.json();
  } catch (e) {
    console.error("[ShadowmaneAPI] ERROR: Failed to set options");
  }


 var servers = await servers_res.json();
 var highpop_servers = await highpop_res.json();

  return {
    props: {
      serverlist_options,
      servers,
      highpop_servers
    },
  };
}

export default ServerList;
