import { UserButton } from "@clerk/nextjs";

const TestPage = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    );
}

export default TestPage;