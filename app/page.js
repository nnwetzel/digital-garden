"use client";

import Image from "next/image";
import { Radio_Canada, Noto_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
  
    const TOTAL = 150;
    const raindrops = [];
  
    class Raindrop {
      constructor() {
        this.reset();
      }
  
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 4 + 4;
        this.angle = Math.PI / 4; // 45 degrees
        this.opacity = Math.random() * 0.3 + 0.3;
      }
  
      draw() {
        const dx = this.length * Math.cos(this.angle);
        const dy = this.length * Math.sin(this.angle);
  
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + dx, this.y + dy);
        ctx.strokeStyle = `rgba(100, 100, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
  
      animate() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        if (this.y > canvas.height || this.x > canvas.width) this.reset();
        this.draw();
      }
    }
  
    for (let i = 0; i < TOTAL; i++) {
      raindrops.push(new Raindrop());
    }
  
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      raindrops.forEach((drop) => drop.animate());
      requestAnimationFrame(render);
    }
  
    render();
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <div className="max-w-2xl w-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-screen -z-10"
      />
      <div className="w-full bg-white bg-opacity-50">
        <div className="min-h-screen ">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">nathaniel</p>
            <Navbar />
          </div>
          <div className="font-bold pt-10 pb-5 text-blue-400">WORK</div>{" "}
          <p>
            sde intern @ {" "}
            <a href="https://www.amazon.com/" className="underline">
              amazon
            </a>
          </p>
          <p className="text-mygray">summer 2025</p>
          <br></br>

          <p>
            swe intern @ {" "}
            <a href="https://www.wolterskluwer.com/en/health" className="underline">
              wolters kluwer
            </a>
          </p>
          <p className="text-mygray">spring 2025 - python, azure, docker, ansible, jenkins</p>
          <br></br>
          <p>
            sde itern @ {" "}
            <a href="https://www.amazon.com/" className="underline">
              amazon
            </a>
          </p>
          <p className="text-mygray">summer 2024 - java, python, aws, elasticsearch, dagger</p>
          <div className="font-bold pt-10 pb-5 text-blue-400">PROJECTS</div>
          <div className="flex justify-between items-center">
            <p className="">ndvi compare</p>

            <div className="flex">
              <a
                href="https://github.com/nnwetzel/ndvi-compare"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">python, fastapi, docker, google earth engine, ivicorn</p>
          <div className="font-bold pt-10 pb-5 text-blue-400">PUBLICATIONS</div>
          <div className="flex justify-between items-center">
            <p className="">coming soon!</p>
            <div className="flex">
              <a
                href="https://wp.nyu.edu/nyumathsociety/"
                className="hover:underline"
              >
              </a>
            </div>
          </div>
          <p className="text-mygray"></p>
          <ul className="pt-10 flex flex-row">
            <a href="https://github.com/nnwetzel" className="pr-5">
              <img src="/github.svg" alt="github" width={30} height={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/nnwetzel/"
              className="pr-5"
            >
              <img src="/linkedin.svg" alt="linkedin" width={30} height={30} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
