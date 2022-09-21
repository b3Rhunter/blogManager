import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import style from "./myCss.css";
import {ethers} from "ethers";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  const [isConnected, connected] = useState(false);
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [change, setChange] = useState(true);

  function changeState() {
    setShow(!show);
  }

  function changeButton() {
    setChange(!change);
  }

  async function connect() {
  
    const provider = new ethers.providers.Web3Provider(window.ethereum)
     await provider.send("eth_requestAccounts", []);
     const signer = provider.getSigner()
     const address = await signer.getAddress()
     const ens = await provider.lookupAddress(address);
     if (ens !== null) {
      setName(ens)
    } else {
      setName(address)
    }
    connected(true)
    changeState()
  }

  async function Approve() {
    try {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    console.log(signer)
    const contract = new ethers.Contract("0x39CdBf8f50ddbfE648C6eaC3A8eCE694CdB34B63", [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}], signer);
    const cost = "1000000000000000000";
    await contract.approve("0xbD76640D49d97c5400DeBD9b4ccAdF986a95940C", cost)
    contract.on("Approval", (to, amount, from) => {
      changeButton()
    console.log("approved")
  });
} catch (error) {
    console.log(error)
}}

async function PayperView() {
  try {
  const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
  const contract = new ethers.Contract("0xbD76640D49d97c5400DeBD9b4ccAdF986a95940C", [{"inputs":[{"internalType":"address","name":"_PayperToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"PayperToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payPerView","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}], signer);
  const tokenContract = new ethers.Contract("0x39CdBf8f50ddbfE648C6eaC3A8eCE694CdB34B63", [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}], signer);
  await contract.payPerView()
  tokenContract.on("Transfer", (to, amount, from) => {
    setAuth(true)
    console.log("paid")
});
} catch (error) {
  setAuth(false)
  console.log(error)
}
};





  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);




  return (
    <div className="min-h-screen p-12 background">
      <div className="container mx-auto">

      {show ? (
        <button onClick={connect} style={{
          color: "#fff",
          borderRadius: "10px",
          border: "solid 1px",
          fontSize: "1em",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "0px",
          paddingBottom: "5px"
          }}>
          
            connect
        
        </button>

      ) : (
        <button onClick={connect} style={{
          color: "#fff",
          borderRadius: "10px",
          border: "solid 1px",
          fontSize: "1em",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "0px",
          paddingBottom: "5px"
          }}>
        
         {name}
   
        </button>

      )}

        <h2 className="text-5xl flex justify-center cursive text-gray-300">Proper CMS</h2>
        <h3 className="text-lg text-gray-500 flex justify-center mb-12">
          Welcome to web3 blogging mfers!
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
      
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-800"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">

                  <span className="block relative h-full flex justify-end items-end pr-4 pb-0">
                    {change ? (
                       <button className="payButton rounded shadow" onClick={Approve}>Approve Bank</button>
                    ) : (
                        <button className="payButton rounded shadow" onClick={PayperView}>Bank-Per-View</button>
                    )}
                   
                    {isAuth && (
                      <Link to={"/" + post.slug.current} key={post.slug.current}>
                        <button className="payButton rounded shadow">view</button>
                      </Link>
                    )}
                    </span>

                    <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                      {post.title}
                    </h2>

                  </span>
                </span>

            ))}
        </div>
      </div>
    </div>
  );
}
