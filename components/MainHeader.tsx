import Logo from "./Logo"

const MainHeader = () => {
    return (
        <header className="sticky top-0 flex h-[64px] w-full border-b bg-primary px-[24px]">
            <nav className="flex w-full items-center justify-between">
                <div className="flex items-center gap-[24px]">
                    <Logo />
                    <div className="text-2xl font-bold">Josh Montgomery</div>
                </div>
                <div className="hidden gap-[24px] md:flex">
                    <div>link1</div>
                    <div>link2</div>
                    <div>link3</div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
