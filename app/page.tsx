"use client"
import { useState, useEffect } from "react"
import { useInterval } from "@mantine/hooks"
import { FaPause, FaPlay, FaEye, FaMeteor } from "react-icons/fa"
import { FaTornado } from "react-icons/fa6"
import useSound from "use-sound"
import { MdRestartAlt } from "react-icons/md"
import { BsBackpackFill } from "react-icons/bs"

export default function Home() {
    const [timer, setTimer] = useState(60)
    const [play] = useSound("/sounds/oof.mp3")
    const interval = useInterval(() => {
        setTimer((s) => s - 1)
    }, 1000)

    const resetTimer = () => {
        setTimer(60)
    }

    const mech = {
        eye: 28,
        backpack: 16,
        tornadosAndGold: 20,
    }

    const startTimer = () => {
        if (!interval.active) {
            interval.start()
        }
    }

    const pauseTimer = () => {
        if (interval.active) {
            interval.stop()
        }
    }

    const delayBecause = (deferAmount: number) => {
        setTimer((prev) => prev + deferAmount)
    }

    useEffect(() => {
        if (timer < 0) {
            setTimer(60)
        }
        if (timer <= 2 || timer === 10) play()
    }, [timer, play])

    return (
        <main className="align-center flex w-full flex-1 flex-col justify-between transition-colors">
            <div className="mt-12 flex flex-col justify-start">
                <div className="flex flex-col items-center">
                    <div className="text-9xl">{timer}</div>
                    <progress value={timer / 60} />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 bg-gray-100 p-4">
                    <button
                        onClick={() => startTimer()}
                        className="flex items-center justify-center rounded border border-black py-4"
                    >
                        <FaPlay style={{ fontSize: "3rem" }} />
                    </button>
                    <button
                        onClick={() => pauseTimer()}
                        className={`flex items-center justify-center rounded border border-black py-4 ${
                            !interval.active ? "bg-gray-200" : ""
                        }`}
                    >
                        <FaPause style={{ fontSize: "3rem" }} />
                    </button>
                    <button
                        onClick={() => resetTimer()}
                        className={`flex items-center justify-center rounded border border-black py-4`}
                    >
                        <MdRestartAlt style={{ fontSize: "3rem" }} />
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 p-4 ">
                    <button
                        onClick={() => delayBecause(mech.eye)}
                        className={`flex items-center justify-center rounded border border-black py-4`}
                    >
                        <FaEye style={{ fontSize: "3rem" }} />
                    </button>
                    <button
                        onClick={() => delayBecause(mech.backpack)}
                        className={`flex items-center justify-center rounded border border-black py-4`}
                    >
                        <BsBackpackFill style={{ fontSize: "3rem" }} />
                    </button>
                    <button
                        onClick={() => delayBecause(mech.backpack)}
                        className={`flex items-center justify-center rounded border border-black py-4`}
                    >
                        <FaTornado style={{ fontSize: "2.5rem" }} />
                        <FaMeteor
                            style={{ fontSize: "2.5rem", color: "#b59410" }}
                        />
                    </button>
                </div>
            </div>
            <div className="text-center text-xs">by kabang</div>
        </main>
    )
}
