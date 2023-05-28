import Button from "@mui/material/Button";

function handleHomeView() {
    window.location.href = '/'
}

export default function TopBar() {
    return (
        <div className="bg-black p-6 flex justify-between w-screen">
            <h1 className="text-white text-4xl font-bold">PointsPal</h1>

            <Button size="large" className="hover:scale-110 hover:transition-transform" onClick={handleHomeView}><p  className="text-white">Home</p></Button>
        </div>
    )
}