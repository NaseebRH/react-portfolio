import React, {Component} from "react";
import Skill_1 from "./Skill_1";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import "./skills.css";
import { CLIENT_RENEG_LIMIT } from "tls";

const SkillsList = props => {
  return <div className={props.className}>{props.children}</div>;
};

class Skills extends Component{
  state = {
    
  }

  handleChange =(e)=>{
//  e.preventDefault();
this.setState({
  [e.target.name]: e.target.value
})
  }
 render(){
   console.log(this.state)
   return( 

  <div className="main skills">
    Skills :

    <input style={{color: 'black'}} 
    placeholder="enter first name" 
    name="firstname"
    onChange={e => this.handleChange(e)}
    /><br/>
    <input style={{color: 'black'}} 
    placeholder="enter second name" 
    name="secondname"
    onChange={e => this.handleChange(e)}
    />
    {this.state.firstname} <br/>
    {this.state.secondname}
    <SkillsList className="skills-list">
      <Skill_1 name="HTML" icon={<FaHtml5 />}>
        intermediate

      </Skill_1>
      <Skill_1 name="CSS" icon={<FaJs />}>
        intermediate
      </Skill_1>
      <Skill_1 name="JAVASCRIPT" icon={<FaCss3Alt />} children="intermediate" />
    </SkillsList>
  </div>
)};
 }
export default Skills;
