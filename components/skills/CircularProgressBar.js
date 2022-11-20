import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Animate } from "react-move";

const CircularProgressBar = ({ value, name, url, index }) => {
  const animations = {
    card1: {
      initial: { opacity: 0, x: 20, y: 20 },
      exit: {
        opacity: 0,
        x: 10,
        y: 10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card2: {
      initial: { opacity: 0, x: -20, y: 20 },
      exit: {
        opacity: 0,
        x: -10,
        y: 10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card3: {
      initial: { opacity: 0, x: 20, y: -20 },
      exit: {
        opacity: 0,
        x: 10,
        y: -10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card4: {
      initial: { opacity: 0, x: -20, y: -20 },
      exit: {
        opacity: 0,
        x: -10,
        y: -10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
  };
  return (
    <motion.div
      variants={
        index == 0
          ? animations.card1
          : index == 1
          ? animations.card2
          : index == 2
          ? animations.card3
          : animations.card4
      }
      animate="animate"
      exit="exit"
      initial="initial"
      className="mb-3 mx-2 h-28 px-2 py-3 rounded-md bg-darkBluePrimary w-32 flex justify-center items-center text-center"
    >
      <div className="flex flex-col justify-center items-center w-12">
        <Image src={url} alt="Abhi Dadhaniya" />
        <h2 className="text-xl text-center mt-1 font-codeText text-lightBluePrimary">
          {name}
        </h2>
      </div>
    </motion.div>
  );
};

export default CircularProgressBar;

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart,
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart,
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}
