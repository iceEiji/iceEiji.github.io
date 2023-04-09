import skillSetJson from './json/personal-skill-set.json'
import timelineEventsJson from './json/personal-timeline-events.json'

const personalSkillSet: SkillSet = skillSetJson;
const personalTimelineEvents: TimelineEvent[] = timelineEventsJson;

export const profile = {
  skillSet: personalSkillSet,
  timelineEvents: personalTimelineEvents,
}