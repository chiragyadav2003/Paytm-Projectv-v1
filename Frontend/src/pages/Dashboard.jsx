import { AppBar, Balance, Users } from "../components/index"
function Dashboard() {
    return (
        <div>
            <AppBar />
            <div className="m-8">
                <Balance value={"10,000"} />
                <Users />
            </div>
        </div>
    )
}

export default Dashboard