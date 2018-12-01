import React, { Component } from 'react';
import '../../asset/customStyle/style.css';
import '../../asset/customStyle/fontz.css';
import '../../asset/customStyle/bootstrapmanual.css';

class Sidemenu extends Component {

	constructor(props, context) {
		super(props, context);
	
		this.state = {
		  open: false
		};
	  }

  componentWillMount() {
    document.title = 'School College Management System - Dashboard'
  }

  render() {
    return (
		<nav id='sidebar'> 		{/* <!-- Sidebar Holder --> */}
			<div className="sidebar_header">
				<h3>Reliable Accountant</h3>
				<strong>RA</strong>
			</div>

			<ul className="list-unstyled components">
				<li className="active">
					<a href="dashboard.html">
						<i className="fa fa-th-large"></i>
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" data-toggle="collapse" aria-expanded="false" onClick={() => this.setState({ open: !this.state.open }) }>
						<i className="fa fa-users"></i>
						Student
					</a>
					{this.state.open != false ? <ChildSTUDENT /> : " " }
					
				</li>
				<li>
					<a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-users"></i>
						Teacher
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu1">
						<li><a href="add-teacher.html">Add Teacher</a></li>
						<li><a href="teacher-list.html">Teacher List</a></li>
					</ul>
				</li>
				<li>
					<a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-users"></i>
						Stuff
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu2">
						<li><a href="add-employee.html">Add Stuff</a></li>
						<li><a href="employee-list.html">Stuff List</a></li>
					</ul>
				</li>
				<li>
					<a href="departments.html">
						<i className="fa fa-th"></i>
						Departments
					</a>
				</li>
				<li>
					<a href="classNamees.html">
						<i className="fa fa-th-large"></i>
						classNamees
					</a>
				</li>
				<li>
					<a href="sections.html">
						<i className="fa fa-square"></i>
						Sections
					</a>
				</li>
				<li>
					<a href="groups.html">
						<i className="fa fa-users"></i>
						Groups
					</a>
				</li>
				<li>
					<a href="subjects.html">
						<i className="fa fa-clipboard"></i>
						Subjects
					</a>
				</li>
				<li>
					<a href="#pageSubmenu10" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-clock-o"></i>
						Routine
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu10">
						<li><a href="routin2.html">Student Routine</a></li>
						<li><a href="routin2.html">Teacher Routine</a></li>
						<li><a href="routin2.html">Employee Routine</a></li>
						<li><a href="routin2.html">Add Routine</a></li>
					</ul>
				</li>
				<li>
					<a href="#pageSubmenu11" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-check-circle"></i>
						Attendance
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu11">
						<li><a href="attendence-student.html">Student Attendance</a></li>
						<li><a href="attendence-teacher.html">Teacher Attendance</a></li>
						<li><a href="attendence-employee.html">Employee Attendance</a></li>
						<li><a href="attendence-stuffs"></a>Stuffs Attendance</li>
					</ul>
				</li>
				<li>
					<a href="exam.html">
						<i className="fa fa-align-justify"></i>
						Exam
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu3">
						<li><a href="#">Manage Exam</a></li>
					</ul>
				</li>
				<li>
					<a href="marks.html">
						<i className="fa fa-calculator"></i>
						Marks
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu8">
						<li><a href="#">Set Marks</a></li>
						<li><a href="#">Result List</a></li>
					</ul>
				</li>
				<li>
					<a href="#pageSubmenu4" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-book"></i>
						Library
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu4">
						<li><a href="library.html">Manage Books</a></li>
					</ul>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-money"></i>
						Collect Fees
					</a>
				</li>
				<li>
					<a href="#pageSubmenu5" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-bus"></i>
						Transport
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu5">
						<li><a href="transport.html">Add Transport</a></li>
						<li><a href="transport-list.html">Transport List</a></li>
					</ul>
				</li>
				<li>
					<a href="notice.html">
						<i className="fa fa-clipboard"></i>
						Notice
					</a>
				</li>
				<li>
					<a href="events.html">
						<i className="fa fa-calendar"></i>
						Events
					</a>
				</li>
				<li>
					<a href="account-setting.html">
						<i className="fa fa-cogs"></i>
						Account Setting
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-align-left"></i>
						FAQ
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-phone"></i>
						Contact
					</a>
				</li>
			</ul>
		</nav>

    );
  }
}


const ChildSTUDENT = () => (
					<ul className="list-unstyled">
						<li><a href="student-addmision.html">Student Admission</a></li>
						<li><a href="student-list.html">Student List</a></li>
					</ul>
	)

export default Sidemenu;