'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isExperiencePage = pathname.startsWith('/experience');

    return (
        <>
            <CustomCursor />
            {!isExperiencePage && <Header />}
            <main className={isExperiencePage ? "" : "pt-[103px]"}>
                {children}
            </main>
        </>
    );
}
