import '../stylesheet/nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowUp, faArrowRight, faArrowUpRightDots, faAngleRight, faPlus, faMinus, faCancel, faX} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
const Nav = () => {

    const my_blog_data=[
        {
            title:'Luganodes Announces Support for the Stacks layer, sBTC',
            date:'Feb 1'
        },
        {
            title:'Velar Raises $3.5M, Plans Perpetual Swaps for Bitcoin DeFi',
            date:'Feb 1'
        }
        ,
        {
            title:'Bitflow  has raised $1.3M in pre-seed funding for Bitcoin DeFi',
            date:'Jan 25'
        }
    ]
    const dropdownRef= useRef(null);
    const [learnIcon,setLearnIcon]=useState(faPlus)
    const buildRef= useRef(null);
    const [buildIcon,setBuildIcon]=useState(faPlus)
    const exploreRef= useRef(null);
    const [exporeIcon,setExploreIcon]=useState(faPlus)
    const joinRef= useRef(null);
    const [joinIcon,setJoinIcon]=useState(faPlus)
    const [navLinkIcon,setNavLinkIcon]=useState(faBars)
    const navlink=useRef(null)
const returnPlusMinus=(dref,setState )=>{
    if(dref.current.style.display=='none'){
        setState(faPlus)
    }else{
        setState(faMinus)
    }
}

const openNavLink=()=>{
if(navlink.current.style.display=='none'||navlink.current.style.display===''){
    navlink.current.style.display='block'
    setNavLinkIcon(faX)
}else{
    navlink.current.style.display='none'
    setNavLinkIcon(faBars)
}

}
    const openNavDropDown =(event,dref, stateData)=>{
        event.preventDefault()
        if(dref.current.offsetWidth<800){
     
       dref.current.style.display= ((dref.current.style.display=='none'||dref.current.style.display==''))?'block':'none'

       returnPlusMinus(dref,stateData)
        }
    }
    return ( 

        <div className="nav">
        <div className=" start-center nav-brand">
            <img src="https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/618b0aafa4afde159efe39d4_Stacks%20logo.svg" alt="stake" />
        </div>


        <div className="nav-link" ref={navlink}>
            <div>

            <ul className='d-grid'>
                <li
                
                onClick={(event)=>{
                    openNavDropDown(event,dropdownRef,setLearnIcon)
                }} 

                >
                    <a > Learn <FontAwesomeIcon className='list-mb-icon' icon={learnIcon}/> </a>
                    {/* first dropdonw */}
                   
                <div className="nav-dropdown" ref={dropdownRef}>
                 {/* first item */}
                        <div className="item1">
                            <div className="start-center">
                                <img src="https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/6195c0aed5bd8a2a6fa4c766_menu_icon_2.jpg" alt="" srcset="" />

                              
                            </div>
                            <p 
                            className="learn-about"
                            >
                                    Learn Aabout
                                </p>
                                <p 
                                className="learn-about-desc"
                                >
                                    Learn what stacking is, how it works and start earning BTC rewards 
                                    </p>
                        </div>

                        {/* second item */}
                        <div className="item2">
                            <div className="box1">
                                <p className="heading">
                                    <span>Introduction</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Stacks 101: What is Stacks, conceptual overview, and why Bitcoin</p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Stacks Whitepaper</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                            A Bitcoin layer: The Nakamoto Release with a Trustless Bitcoin Peg and Finality
                            
                            </p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>sBTC: Unlocking Trustless Bitcoin</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Making Bitcoin the foundation for a more secure Web3 and unlocking the Bitcoin economy
                            
                            </p>
                            </div>
                           
                        </div>

                        {/* third item */}
                        <div className="item3">

                        <div className="box1">
                                <p className="heading">
                                    <span>Technology</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Learn what the Stacks Bitcoin layer unlocks and how it works</p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Learnning Resources</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                            Recommended videos, articles, and more to expand your Stacks knowledge
                            
                            </p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Stay in the Loop</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                               Find news roundups and recaps from across the Stacks ecosystem, curated by the Stacks Foundation
                            </p>
                            </div>

                        </div>
                  
                </div>

                </li>

                <li
                 onClick={(event)=>{
                    openNavDropDown(event,buildRef,setBuildIcon)
                }}
                >
                    <a href=""  
                    
                    
                    > Build <FontAwesomeIcon className='list-mb-icon' icon={buildIcon}/></a>
                    <div className="nav-dropdown" ref={buildRef}>
                 {/* first item */}
                        <div className="item1">
                            <div className="start-center">
                                <img src="https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/6195c0aed5bd8a2a6fa4c766_menu_icon_2.jpg" alt="" srcset="" />

                              
                            </div>
                            <p 
                            className="learn-about"
                            >
                                    Docs
                                </p>
                                <p 
                                className="learn-about-desc"
                                >
                                    The knowledge-base for developers
                                    </p>
                        </div>

                        {/* second item */}
                        <div className="item2">
                            <div className="box1">
                                <p className="heading">
                                    <span>Get Started</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">From Bitcoin DeFi, to NFTs, you can build apps and smart contracts that make the most of Bitcoin’s powers.</p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Build On Bitcoin</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                A complete roadmap and resource hub for becoming a professional Stacks developer and building on Bitcoin
                            
                            </p>
                            </div>
                           
                           
                        </div>

                        {/* third item */}
                        <div className="item3">

                     
                            <div className="box1">

                            <p className="heading">
                                    <span>Contribute</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                See how you can contribute to Stacks core development or projects built on Stacks
                            
                            </p>
                            </div>

                            <div className="box1">
                                <p className="heading">
                                    <span>Fund Your Project</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Learn about the Stacks Accelerator and Stacks Grants Program</p>
                            </div>
                          
                          <div className="links ">
                          <p>Github<FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          <p>Github<FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          </div>

                        </div>
                  
                </div>
                </li>

                <li>
                    <a href=""  
                    
                    onClick={(event)=>{
                        openNavDropDown(event,exploreRef,setExploreIcon)
                    }}
                    > Explore <FontAwesomeIcon className='list-mb-icon' icon={exporeIcon}/></a>

                     <div className="nav-dropdown" ref={exploreRef}>
                 {/* first item */}
                        <div className="item1">
                          <p className="blog-heading start-center">
                            Latest Article
                          </p>

                          <div className="blogs-content">
                            {
                                my_blog_data.map((data)=>{
                                    return(
                                    <>
                                      <p key={data.title} className="blog-content-heading">{data.date}</p>
                            <p className="blog-content-desc">{data.title}</p>
                                    </>
                                  
                                )})
                            }
                            
                          </div>
                        </div>

                        {/* second item */}
                        <div className="item2">
                            <div className="box1">
                                <p className="heading">
                                    <span> Discover App</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Try apps that benefit from a sturdy Bitcoin foundatione</p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Start Stacking</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Earn BTC rewards to helping secure the Stacks layer                            
                            </p>
                            </div>


                            <div className="box1">

                            <p className="heading">
                                    <span>Find a Wallet</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Access to your account, tokens, and interact with apps                            
                            </p>
                            </div>
                           
                           

                                
                            <div className="box1">

<p className="heading">
        <span>Browse NFTs</span>
        <span
        className='icon'
        style={{
            display:'block'
        }}
        >
            <FontAwesomeIcon icon={faArrowRight}/>
        </span>
        </p>
    <p className="desc">
    Collect, create, and explore NFTs on Stacks                           
</p>
</div>

                        </div>

                        {/* third item */}
                        <div className="item3">

                     
                            <div className="box1">

                            <p className="heading">
                                    <span>Roadmap</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Find all Stacks layer updates, milestones, and major improvements in one place.
                            </p>
                            </div>

                            <div className="box1">
                                <p className="heading">
                                    <span>Ecosystem</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Learn about the Ecosystem's tools, partners, and communities.</p>
                            </div>

                            <div className="box1">
                                <p className="heading">
                                    <span>Blog</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Articles, news, and resources from across the Stacks Ecosystem</p>
                            </div>
                          
                          <div className="links"
                          style={{
                            textAlign:'right'
                          }}
                          >
                          <p>Youtube<FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          
                          </div>

                        </div>
                  
                </div>
                </li>
                <li 
                 onClick={(event)=>{
                        openNavDropDown(event,joinRef,setJoinIcon)
                    }}
                    
                    >
                    <a href=""
                    
                    > Join <FontAwesomeIcon className='list-mb-icon' icon={joinIcon}/></a>
                

                    <div className="nav-dropdown" ref={joinRef}>
                 {/* first item */}
                        <div className="item1">
                            <div className="start-center">
                                <img src="https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/6195c191e998684f4ef424fa_discord_black_icon_166.jpg" alt="" srcset="" />

                              
                            </div>
                            <p 
                            className="learn-about"
                            >
                                    Discord
                                </p>
                                <p 
                                className="learn-about-desc"
                                >
                                   Join a community of builders, developers, holders, and investors
                                    </p>
                        </div>

                        {/* second item */}
                        <div className="item2">
                            <div className="box1">
                                <p className="heading">
                                    <span>Find community at upcoming conferences, virtual events, and more</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Find community at upcoming conferences, virtual events, and more</p>
                            </div>
                            <div className="box1">

                            <p className="heading">
                                    <span>Forum</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Discussions about Stacks and technical support                            
                            </p>
                            </div>
                                                
                                       <div className="box1">

                        <p className="heading">
                                <span>Job and Talent</span>
                                <span
                                className='icon'
                                >
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </span>
                                </p>
                            <p className="desc">
                            Join a team building on Stacks or list your skills so founders can find you                           
                        </p>
                        </div>

                        </div>

                        {/* third item */}
                        <div className="item3">

                     
                            <div className="box1">

                            <p className="heading">
                                    <span>Discord and More</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">
                                Join local and global groups on Discord, Telegram, Kakao and more.
                            
                            </p>
                            </div>

                            <div className="box1">
                                <p className="heading">
                                    <span>Working Groups</span>
                                    <span
                                    className='icon'
                                    >
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                    </p>
                                <p className="desc">Groups working on key workstreams in the Stacks Ecosystem</p>
                            </div>
                          
                          <div className="links ">
                          <p>Github <FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          <p>Reddit <FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          <p>Telegram <FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          <p>Twitter <FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          <p>Youtube <FontAwesomeIcon icon={faArrowUpRightDots}/></p>
                          </div>

                        </div>
                  
                </div>



                </li>
            </ul>
            </div>
           
        </div>

        <p 
        className=' nav-icon center-center'
        onClick={
            ()=>{
                openNavLink();
                
            }
        }
        style={{
            zIndex:'2'
        }}
        >
            <FontAwesomeIcon icon={navLinkIcon}/>
        </p>
        </div>


     );
}
 
export default Nav;