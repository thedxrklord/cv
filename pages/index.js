import { useState, useEffect } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { BsChevronDoubleDown, BsTelegram } from 'react-icons/bs';
import Image from "next/image";
import toxa from '../public/images/toxa.jpg';
import { Portfolio } from '../components/Portfolio';
import { Header } from '../components/Head';
import { Link, animateScroll as scroll } from "react-scroll";
import { projects } from "../constants/portfolio";
import { CV_PATH as CV } from '../constants/cv';

const fillInfo = async () => {
  Array.from(document.getElementsByClassName('my-info')).forEach(async element => {
    element.innerHTML = '';
    for (const char of element.dataset.replace) {
      element.innerHTML += char;
      await new Promise(r => setTimeout(r, 50));
    }
  });
}
export default function Home() {
  useEffect(() => {
    setTimeout(function() {
      fillInfo();
    }, 1000)
  }, [])

  return (
    <div>
      <Header title="Anton Sanin Portfolio" description="Anton Sanin Portfolio"/>

      <main className="px-10 mb-5">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-end">
            <ul className="flex items-center">
              <li>
                <a className="bg-gradient-to-r from-pink-600 to-pink-700 
              text-white px-4 py-2 border-none rounded-md ml-8" href={CV} target="_blank">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="relative flex justify-center pb-5">
            <Image src={toxa} className="rounded-full w-60 h-60" alt="toxa" priority />
          </div>
          <div className="text-center">
            <h2 className="text-5xl py-2 custom-red font-medium my-info" data-replace="Anton Sanin">&#123;&#123; user.name &#125;&#125;</h2>
            <h3 className="text-2xl py-2 my-info text-gray-200" data-replace="Developer">&#123;&#123; user.speciality &#125;&#125;</h3>
            <p className="text-md py-5 leading-8 text-gray-200 my-info" data-replace="Backend Developer with 5+ years of commercial experience">
            &#123;&#123; user.about &#125;&#125;
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 py-3 text-white flex-grow">
            <a target="_blank" href="mailto:sanin.tony.work@gmail.com">
              <AiFillMail />
            </a>
            <a href="https://t.me/bcryptxd" target="_blank">
              <BsTelegram />
            </a>
            <a href="https://github.com/thedxrklord" target="_blank">
              <AiFillGithub />
            </a>
          </div> 
          <div className="flex justify-center pt-28 animate-pulse"> 
            <Link to="portfolio" smooth={true}>
                <h1 className="text-2xl text-gray-200 cursor-pointer">Portfolio</h1>
                <BsChevronDoubleDown className="text-2xl ml-8 text-gray-200 cursor-pointer" />
            </Link>
          </div>      
        </section>
      
        <section>
          <Portfolio projects={projects}/>
        </section>
      </main>
    </div>
  )
}
