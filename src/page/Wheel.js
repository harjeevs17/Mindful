import React from 'react';
import Tabs from "../components/Tabs";
import "../css/Tab.css";
import "../css/Quiz.css";

const Wheel = () => {
    return (
        <div className="container">
            <div class="tab-property">
                <h1>To know about your mental health, Ask yourself these questions!</h1>
                <Tabs>
                    <div label="Depression">
                        <li>Little interest or pleasure in doing things?</li>
                        <li>Feeling down, depressed, or hopeless?</li>
                        <li>Trouble falling or staying asleep, or sleeping too much?</li>
                        <li>Feeling tired or having little energy?</li>
                        <li>Poor appetite or overeating?</li>
                        <li>Feeling bad about yourself or that you are a failure or have let yourself or your family down?</li>
                        <li>Trouble concentrating on things, such as reading the newspaper or watching television?</li>
                        <li>Moving or speaking so slowly that other people could have noticed?</li>
                        <li>Thoughts that you would be better off dead, or of hurting yourself?</li>
                        <li>If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</li> 
                        {/* <br/>
                        <b>Options
                            <li>Not at all</li> 
                            <li>Few Days</li>
                            <li>Most of the time</li>
                            <li>Certainly Every Day</li>
                        </b> */}
                    </div>  
                    <div label="Psychosis">
                        <li>Do familiar surroundings sometimes seem strange, confusing, threatening or unreal to you?</li>
                        <li>Have you heard unusual sounds like banging, clicking, hissing, clapping or ringing in your ears?</li>
                        <li>Do things that you see appear different from the way they usually do?</li>
                        <li>Have you felt that you are not in control of your own ideas or thoughts?</li>
                        <li>Do you have difficulty getting your point across, because you ramble or go off the track a lot when you talk?</li>
                        <li>Do you have strong feelings or beliefs about being unusually gifted or talented in some way?</li>
                        <li>Do you feel that other people are watching you or talking about you?</li>
                        <li>Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of?</li>
                        <li>Have you had the sense that some person or force is around you, although you couldn’t see anyone?</li>
                        <li>Do you worry at times that something may be wrong with your mind?</li>
                        {/* <li>Have you ever felt that you don't exist, the world does not exist, or that you are dead?</li>
                        <li>Do you hold beliefs that other people would find unusual or bizarre?</li>
                        <li>Are your thoughts sometimes so strong that you can almost hear them?</li>
                        <li>Do you find yourself feeling mistrustful or suspicious of other people?</li>
                        <li>Have you seen unusual things like flashes, flames, blinding light, or geometric figures?</li>
                        <li>Have you seen things that other people can't see or don't seem to see?</li>
                        <li>Do people sometimes find it hard to understand what you are saying?</li> */}
                        {/* <br/>
                        <b>Options
                            <li>Yes</li> 
                            <li>No</li>
                        </b> */}
                    </div>
                    <div label="Anxiety">
                        <li>Feeling nervous, anxious, or on edge?</li>
                        <li>Not being able to stop or control worrying?</li>
                        <li>Worrying too much about different things?</li>
                        <li>Trouble relaxing yourself?</li>
                        <li>Being so restless that it is hard to sit still?</li>
                        <li>Becoming easily annoyed or irritable?</li>
                        <li>Feeling afraid, as if something awful might happen?</li>
                        {/* <br/>
                        <b>Options
                            <li>Yes, Quite often</li> 
                            <li>Yes, most of the times</li>
                            <li>Not very often/ Occasionally</li>
                            <li>Never/ Not at all</li>
                        </b> */}
                    </div>
                    <div label="Bipolar">
                        <li>You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?</li>
                        <li>You were so irritable that you shouted at people or started fights or arguments?</li>
                        <li>You felt much more self-confident than usual?</li>
                        <li>You got much less sleep than usual and found you didn’t really miss it?</li>
                        <li>You were much more talkative or spoke much faster than usual?</li>
                        <li>Thoughts raced through your head or you couldn’t slow your mind down?</li>
                        <li>You were so easily distracted by things around you that you had trouble concentrating or staying on track?</li>
                        <li>You had much more energy than usual?</li>
                        <li>You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?</li>
                        <li>You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?</li>
                        {/* <li>Spending money got you or your family into trouble?</li>
                        <li>Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?</li> */}
                        {/* <br/>
                        <b>Options
                            <li>Yes</li> 
                            <li>No</li>
                        </b> */}
                    </div>
                    <div label="Eating Disorder">
                        <li>Do you consume a small amount of food on a regular basis to influence your shape or weight?</li>
                        <li>Do you struggle with a lack of interest in eating or food?</li>
                        <li>Do you avoid certain foods because of its texture, consistency, smell, or have other people suggested this may be the case for you?</li>
                        <li>Do you avoid certain foods because of fear of experiencing negative consequences like choking or vomiting?</li>
                        <li>Have you experienced significant weight loss but are not overly concerned with the size or shape of your body?</li>
                        {/* <br/>
                        <b>Options
                            <li>Yes</li> 
                            <li>No</li>
                        </b> */}
                    </div>
                    <div label="Post-traumatic stress disorder">
                        <li>Had nightmares about the events or thought about the events when you did not want to?</li>
                        <li>Tried hard not to think about the events or went out of your way to avoid situations that reminded you of the events?</li>
                        <li>Have you been constantly on guard, watchful, or easily startled?</li>
                        <li>Ever felt numb or detached from people, activities, or your surroundings?</li>
                        <li>Ever felt guilty or unable to stop blaming yourself for the events or any problems may have caused?</li>
                        {/* <br/>
                        <b>Options
                            <li>Yes</li> 
                            <li>No</li>
                        </b> */}
                    </div>
                    <div label="Workplace Mental Health">
                        <li>My company's workforce is diverse.</li>
                        <li>My company's leadership is diverse.</li>
                        <li>My company invests time and energy into building a diverse workforce.</li>
                        <li>My identity and perspectives are valued by my supervisor, coworkers or peers.</li>
                        <li>My supervisor has meaningful conversations about race, gender, or disability in the workplace.</li>
                        <li>I feel comfortable asking for a promotion (change in job duties or title) in my current workplace.</li>
                        <li>I feel comfortable providing feedback to my supervisor about their management style.</li>
                        <li>If I was mistreated because of my race, gender, or disability, I would feel comfortable talking to my supervisor or team about it.</li>
                        <li>I regularly experience microaggressions at work. </li>
                        <li>My company takes direct actions to address discrimination in the workplace.</li>
                        <li>I feel mentally or emotionally safe in my workplace.</li>
                        <li>I am actively looking for a new position.</li>
                        {/* <br/>
                        <b>Options
                            <li>Strongly Disagree</li> 
                            <li>Disagree</li>
                            <li>Somewhat Disagree</li>
                            <li>Strongly Agree</li> 
                            <li>Agree</li>
                            <li>Somewhat Agree</li>
                        </b> */}
                    </div>
                </Tabs>
            </div>
        </div>
    )
}
export default Wheel;
