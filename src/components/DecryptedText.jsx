import ScrambleHover from "@/fancy/components/text/scramble-hover"

export default function DecryptedText({ text,speed }) {
  return (
      <div className=" w-full">
        <ScrambleHover
          text={text}
          scrambleSpeed={speed}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
        />
    </div>
  )
}
