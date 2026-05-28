import { MainFooter } from "@/src/components/layout/main/main-footer";
import { MainHeader } from "@/src/components/layout/main/main-header";

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <MainHeader />
            <main>{children}</main>
            <MainFooter/>
        </div>
    );
};