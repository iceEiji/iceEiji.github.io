import skillSetJson from "./json/personal-skill-set.json";
import timelineEventsJson from "./json/personal-timeline-events.json";

const personalSkillSet: SkillSet = skillSetJson;
const personalTimelineEvents: TimelineEvent[] = timelineEventsJson;

export const profile = {
  message:
    "福岡県出身＆在住のエンジニア。フロントエンド・バックエンド・モバイルと幅広く仕事してきました🍺",
  skillSet: personalSkillSet,
  timelineEvents: personalTimelineEvents,
};
