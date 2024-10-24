"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import ProjectLink from "./ProjectLink";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  //Use selected project to conditionally display something
  console.log(selectedProject);

  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [containerControls, isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"></div>
        <button
          className="p-1 rounded-full flex"
          onClick={() => handleOpenClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <NavigationLink name="Dashboard">
          <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-7 w-7"></ChartBarIcon>
        </NavigationLink>
        <NavigationLink name="Projects">
          <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-7 w-7"></Square2StackIcon>
        </NavigationLink>
        <NavigationLink name="Tasks">
          <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-7 w-7"></DocumentCheckIcon>
        </NavigationLink>
        <NavigationLink name="Reporting">
          <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-7 w-7"></ChartPieIcon>
        </NavigationLink>
        <NavigationLink name="Users">
          <UsersIcon className="stroke-inherit stroke-[0.75] min-w-7 w-7"></UsersIcon>
        </NavigationLink>
      </div>
      <div className="flex flex-col gap-5">
        <ProjectLink
          name="Virtual Reality"
          setSelectedProject={setSelectedProject}
        >
          <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700"></div>
        </ProjectLink>
        <ProjectLink name="Apple" setSelectedProject={setSelectedProject}>
          <div className="min-w-4 mx-2 yellow-pink-600 border rounded-full aspect-square bg-yellow-700"></div>
        </ProjectLink>
        <ProjectLink
          name="Soem proejct"
          setSelectedProject={setSelectedProject}
        >
          <div className="min-w-4 mx-2 border-green-600 border rounded-full aspect-square bg-green-700"></div>
        </ProjectLink>
      </div>
    </motion.nav>
  );
};

export default Navigation;
