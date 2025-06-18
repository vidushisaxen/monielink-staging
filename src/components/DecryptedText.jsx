import ScrambleHover from "@/fancy/components/text/scramble-hover"

export default function DecryptedText({text}) {
  return (
      <div className="text-left w-full">
        <ScrambleHover
          text={text}
          scrambleSpeed={40}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          // className="font-azeret-mono"
          characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
        />
    </div>
  )
}
