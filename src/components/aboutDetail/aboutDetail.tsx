import AboutDescription, { aboutDetail } from "./description";

export default function AboutDetail() {
    const INTRODUCTION: aboutDetail["detail"] = {
        title: "Who am I?",
        descList: [
            "개발을 사랑하는 풀스택 개발자",
            "사람과 디자인을 담는 웹앱을 만들고 있음",
        ],
    };
    const CAREER: aboutDetail["detail"] = {
        title: "Career",
        descList: ["구글러(~Now)", "메이스북(~2019)", "삼준전자(~2015)"],
    };
    const SKILLS: aboutDetail["detail"] = {
        title: "Skills",
        descList: ["React, Vue, Node", "Git, Clean Code"],
    };
    return (
        <section className="flex flex-col items-center bg-slate-300 m-5 p-5 h-4/6 justify-between">
            <AboutDescription detail={INTRODUCTION} />
            <AboutDescription detail={CAREER} />
            <AboutDescription detail={SKILLS} />
        </section>
    );
}
