import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import HomeHeader from "../components/headers/homeHeader";
import Footer from "../components/footer";

function ServerList({support_options}) {
  return (
    <div className="min-h-screen">
      <Head>
      <title>ARK Classic - Support</title>
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
      <section className="text-gray-700 pt-20">
  <div className="title text-center text-white p-8 pb-2 text-3xl md:text-5xl ">
    ARK Classic Support
  </div>
  <div className="flex justify-center flex-wrap">
    <div className="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4 mt-10">
      <div className="flex flex-col bg-gray-800 rounded-2xl p-4 items-center shadow-lg ">
        <h2 className="text-gray-50 text-2xl"><i className="fab fa-discord text-gray-100" /> Discord Support</h2>
        <p className="p-4 text-gray-500 text-center">
          Contact Us via discord and open a ticket to get one of our staff members to reach out.
        </p>
        <div className="flex justify-between ">
          <a href="https://discord.gg/mQKtJJK6ya" className="bg-bred-2 hover:bg-red-800 text-white rounded-full shadow-md px-4 py-1 transition duration-200 ease-in-out">Discord</a>
        </div>
      </div>
    </div>
  </div>
  <div className="title text-center text-white p-8 text-3xl md:text-5xl mb-20">
    Frequently Asked Questions
  </div>
  <div className="flex justify-center mb-20 hidden">
    <div className="w-full">
      <div className=" bg-bgray-secondary rounded-2xl p-4 shadow-lg mb-4 md:mb-2 mx-64">
        <h2 className="text-gray-50 text-2xl">How to get Support?</h2>
        <p className="p-4 pl-0 text-gray-500">
          In order to create a ticket, join our discord server go to #contact-support channel and react to the envelope emoji to open a ticket. A conversation will be opened between you and the admin team. Please do not contact members of the admin team directly.
        </p>
      </div>
      <div className=" bg-bgray-secondary rounded-2xl p-4 shadow-lg mb-4 md:mb-2 mx-64">
        <h2 className="text-gray-50 text-2xl">When is the next server wipe?</h2>
        <p className="p-4 pl-0 text-gray-500">
          There are no fixed dates for a server wipe. This depends mostly on server population. A season usually takes 1 or 1.5-months.
        </p>
      </div>
      <div className=" bg-bgray-secondary rounded-2xl p-4 shadow-lg mb-4 md:mb-2 mx-64">
        <h2 className="text-gray-50 text-2xl">Why does it take so long to get an answer on a ticket?</h2>
        <p className="p-4 pl-0 text-gray-500">
          Our team is doing its best to provide quick support. But we all have jobs and families aswell and are doing our support work in our freetime. We also don’t work with “first come first serve”. We have a priority system for our tickets so topics that need immediate support will be worked on first.
          <br />Note:
          <br />- DM’ing any Admin about a Ticket won’t get you faster support.
          <br />- Tagging Admins in discord won’t get you faster support.
          <br />- Donations won’t get you faster support.
        </p>
      </div>
      <div className=" bg-bgray-secondary rounded-2xl p-4 shadow-lg mb-4 md:mb-2 mx-64">
        <h2 className="text-gray-50 text-2xl">I got banned, what can I do?</h2>
        <p className="p-4 pl-0 text-gray-500">
          If you got banned you can open a ticket on our support page. Sometimes when a player can’t be reached via ingame chat or discord we will issue a temporary ban to get their attention.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("[ShadowmaneAPI] DEBUG: Fetched Server List Options");

  const res = await fetch(
    "http://bloody-ark.com:3000/api/options/support_options"
  );

  var support_options = null;
  try {
    support_options = await res.json();
  } catch (e) {
    console.error("[ShadowmaneAPI] ERROR: Failed to set options");
  }

  return {
    props: {
      support_options,
    },
  };
}

export default ServerList;
