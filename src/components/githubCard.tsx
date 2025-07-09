import { useCallback, useEffect, useState } from "react";
import GithubCalendar, {Activity} from 'react-github-calendar'

function GithubCard(){
    const [count, setCount] = useState(0);
    const [client, setClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        setClient(true);
        
        const device = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        
        device();
        checkTheme();
        
        window.addEventListener('resize', device);
        
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        return () => {
            window.removeEventListener('resize', device);
            observer.disconnect();
        };
    },[]);

    const func = useCallback((contributions:Activity[])=>{

        const total = contributions.map((el)=>el.count).reduce((acc,curr)=>acc+curr,0);
        setCount(total);


        const startDay = isMobile ? 200 : 91;
        
        return contributions.slice(startDay, contributions.length);

    },[isMobile]);

    if(!client){
        return <div className="h-36 w-full" />
    }

    return (
        <GithubCalendar
            username="whysooharsh"
            transformData={func}
            totalCount={count}
            colorScheme={isDark ? 'dark' : 'light'}
            theme={{
                light: [
                    '#f0f9ff',
                    '#bfdbfe',
                    '#60a5fa',
                    '#2563eb',
                    '#1e40af'
                ],
                dark: [
                    '#2d1b1b',
                    '#7f1d1d',
                    '#dc2626',
                    '#f87171',
                    '#fecaca'
                ]
            }}
            />
        );
}

export default GithubCard;