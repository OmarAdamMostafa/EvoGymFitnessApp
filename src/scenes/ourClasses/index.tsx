import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are the perfect way to get in shape and build muscle.  Whether you're a beginner or an experienced weightlifter, our classes are tailored to your needs and will help you improve your technique, build strength, and increase your overall fitness.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes are the perfect way to destress, unwind, and improve your flexibility and balance. You'll learn a variety of poses and techniques that will help you build strength, improve your posture, and increase your overall wellness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes are the perfect way to tone and strengthen your core muscles. You'll learn a variety of exercises and techniques that will help you improve your balance, stability, and overall core strength.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "If you're looking for a fun and exciting way to stay fit and active, our gym adventure classes are perfect for you! You'll climb, crawl, jump, and swing your way through the course, building strength, endurance, and agility along the way.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our gym fitness classes are designed to help you get in the best shape of your life. We offer a variety of classes, including high-intensity interval training (HIIT), circuit training, bootcamp-style workouts, and more.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our gym training classes are designed to help you get the most out of your workouts and achieve your fitness goals.  We offer a variety of classes, including weight training, cardio conditioning, functional training, and more.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              At our gym, we offer a wide variety of classes to meet your fitness 
              needs and preferences. Whether you're looking for a high-intensity 
              workout, a relaxing yoga class, or something in between, we've got 
              you covered.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
