import React from "react";
import "./Experience.css";
import {BsFiletypeHtml, BsFiletypeJava, BsGit, BsGithub, BsPatchCheckFill, BsUiChecks, BsUiRadios, BsWindowFullscreen} from "react-icons/bs";
import { FaCss3, FaHtml5, FaJava, FaPallet, FaReact, FaUikit, FaVideo } from "react-icons/fa";
import { MdArtTrack, MdColorLens, MdDesignServices, MdGraphicEq, MdJavascript, MdOutlineDesignServices, MdPallet, MdVideoLabel, MdVideoLibrary, MdWeb, MdWebAsset, MdWebStories } from "react-icons/md";
import { SiAdobe, SiAdobephotoshop, SiAdobepremierepro, SiAndroidstudio, SiArtstation, SiCanva, SiDesignernews, SiDigitalocean, SiFigma, SiFirebase, SiJavascript, SiUikit, SiVisualstudiocode, SiWritedotas } from "react-icons/si";
import { BiCode, BiColorFill, BiEdit, BiPaint, BiUserX, BiVideo, BiVideoRecording } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { RiPaintBrushLine } from "react-icons/ri";
const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Languauges</h3>
          <div className='experience__content'>
            <div>
              {" "}
              <article className='experience__details'>
             
                <FaHtml5 className='experience__details-icon' />
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </article>
            </div>
            <div>
              {" "}
              <article className='experience__details'>
                <FaCss3 className='experience__details-icon' />
                <h4>CSS3+Flexbox</h4>
                <small className='text-light'>Proficient</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <SiJavascript className='experience__details-icon' />
                <h4>JavaScript</h4>
                <small className='text-light'>Advanced Beginner</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFiletypeJava className='experience__details-icon' />
                <h4>Java</h4>
                <small className='text-light'>Amateur</small>
              </article>
            </div>
          </div>
        </div>
        <div className='experience__backend'>
          <h3> Technologies
          </h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <FiFigma className='experience__details-icon' />
                <h4>Figma</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsGit className='experience__details-icon' />
                <h4>Git</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <SiFirebase className='experience__details-icon' />
                <h4>Firebase
                </h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              {" "}
              <article className='experience__details'>
                <FaReact className='experience__details-icon'/>
                <h4>React</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
          </div>
        </div>
        <div className='experience__backend'>
          <h3> Skills </h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <MdVideoLibrary  className='experience__details-icon' />
                <h4>Video Editing</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BiVideoRecording className='experience__details-icon' />
                <h4>Videography</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <SiUikit className='experience__details-icon' />
                <h4>UI Design</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <MdColorLens className='experience__details-icon' />
                <h4>Graphic design</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BiCode className='experience__details-icon' />
                <h4>Front-End web design</h4>
                <small className='text-light'>Expert</small>
              </article>
            </div>
           
            <div>
              {" "}
              <article className='experience__details'>
                <BiEdit className='experience__details-icon'/>
                <h4>
                  Creative writing
                </h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
            <div>
              {" "}
              <article className='experience__details'>
                <BiPaint className='experience__details-icon'/>
                <h4>
                  Digial Arts and paiting
                </h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
          </div>
        </div>
        <div className='experience__backend'>
          <h3> Tools </h3>
          <div className='experience__content'>
            <div>
              {" "}
              <article className='experience__details'>
                <SiCanva className='experience__details-icon' />
                <h4>Canva</h4>
                <small className='text-light'>Beginner</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <SiAdobephotoshop className='experience__details-icon'/>
                <h4>Photoshop</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <SiAdobepremierepro className='experience__details-icon'/>
                <h4>PremierPro</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsGithub className='experience__details-icon'/>
                <h4>Github</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <SiFigma className='experience__details-icon'/>
                <h4>Figma</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <SiAndroidstudio className='experience__details-icon'/>
                <h4>Android Studio</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <SiVisualstudiocode className='experience__details-icon'/>
                <h4>VS Code</h4>
                <small className='text-light'>Competent</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsWindowFullscreen className='experience__details-icon'/>
                <h4>Windsurf</h4>
                <small className='text-light'>Amateur</small>
              </article>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
