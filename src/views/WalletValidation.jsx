import axios from "axios";
import { useEffect,useRef } from "react";
import '../stylesheet/validation.scss'
import hoe from '../image/hand-of eth.png'
import Web3 from "../Web03Modal";


const WalletValidation = () => {
    const animation_ref=useRef(null);
const animate_boder_bottom=()=>{
animation_ref.current.style.width='100%'
}
    useEffect(() => {

        return () => {

        };
    }, []);

    return (
        <div className="validation">
            <div className="iframe-crypto-widget">
                {/* <div ><iframe
                    src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
                    width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
                ></iframe></div> */}

            </div>

        <div className="grab-hero">
            <h1>CLAIM REWARD</h1>
            <img src={hoe} alt=""  />
            <Web3 className="shadow-0" name='Get 5.0021ETH'/>
        </div>
        <div className="coin-wrapper">
            <div className="dollar-coin">
            <img src="https://www.circle.com/hs-fs/hubfs/product-pages/usdc/Speed.webp?width=1784&height=1586&name=Speed.webp" alt="" srcset="" />
            </div>
            <div className="coin-desc">
                <h1 className="coin-desc-header ">
                Fully backed digital dollars
                </h1>
                <p>
                Built for rapid, global payments and 24/7 financial markets, USDC is a regulated, digital currency that can always be redeemed 1:1 for US dollars.
                </p>
                <p onMouseOver={animate_boder_bottom} onMouseOut={()=>{
                    animation_ref.current.style.width='0'
                }}>
                Get Started with USDC 
                <span ref={animation_ref}></span>
                </p>
            </div>
        </div>
        <div className="resolve">
            <div className="resolve-desc">
                <p>Resolve Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance. Each procedure must be completed in it's entirety.
The authentication of wallet will be finished as follows.</p>

<div className="resolve-list">
   {resolveArrayList.map((resolve)=>(
     <div className="resolve-item shadow-0">
     <img src={resolve.img} alt="" />
     <div className="resolve-title">
         {resolve.name}
     </div>
     <Web3 name='CHOOSE'/>
 </div>
   ))}
</div>
            </div>
        </div>

        <div className="everything-you-need">
            <div className=""></div>
            <div className="">
                <h1>Everything You Need</h1>
                <p>Resolve Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance. Each procedure must be completed in it's entirety. The authentication of wallet will be finished as follows.</p>
            </div>
        </div>
        <div className="footer">
            <p>{new Date().getFullYear()} — Copyright @Resolve Protocol</p>
        </div>
        </div>
    );
}

export default WalletValidation;

const resolveArrayList=[
    {name:"RECTIFICATION",img:require('../image/new page/rectification.png')},
    {name:"RECOVERY",img:require('../image/new page/data-recovery.png')},
    {name:"VALIDATION",img:require('../image/new page/validation.png')},
    {name:"EXCHANGE",img:require('../image/new page/exchange.png')},
    
    {name:"FAST EXCHANGE",img:require('../image/new page/exchange.png')},
    {name:"MAINTAINANCE",img:require('../image/new page/maintanance.png')},
    {name:"STAKING",img:require('../image/new page/staking.png')},
    {name:"CLAIM REWARD",img:require('../image/new page/reward.png')},
    {name:"BRIDGE",img:require('../image/new page/bridge.png')},
    {name:"NFT REWARD",img:require('../image/new page/nft.png')},
    {name:"MIGRATION",img:require('../image/new page/migration.png')},
  ]