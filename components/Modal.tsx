import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from "next/link";
import { Download } from "lucide-react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button endContent={<Download  width="18" height="18"/>} onPress={onOpen} className="font-medium bg-lime-400 ">Download Resume</Button>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className="bg-zinc-900 from-inherit  border-neutral-800 border">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lime-100 font-medium">Download Resume</ModalHeader>
              <ModalBody className="text-neutral-400" >
                <p> 
                    Passionate and detail-oriented Web Developer with a strong foundation in programming and a passion for
                    creating user-friendly, scalable, and efficient web applications. I am eager to apply my technical skills and
                    knowledge to contribute to a dynamic development team.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link href="https://drive.google.com/file/d/1ATz88WzeVe0ksN6vCIkjoC7zd_-JUwnd/view?usp=sharing" target="_blank" rel="noreferrer" >
                    <Button className="bg-lime-400" onPress={onClose}>
                        Visit
                    </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
