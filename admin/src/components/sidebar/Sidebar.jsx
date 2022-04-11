import "./sidebar.css";
import { Link } from "react-router-dom";
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
} from "@mui/icons-material";
import TableChartIcon from "@mui/icons-material/TableChart";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Layouts</h3>
					<ul className="sidebarList">
						<Link to="/layouts/config" className="link">
							<li className="sidebarListItem ">
								<TableChartIcon className="sidebarIcon" />
								Config
							</li>
						</Link>
						<Link to="/layouts/categories" className="link">
							<li className="sidebarListItem ">
								<TableChartIcon className="sidebarIcon" />
								Categories
							</li>
						</Link>
						<Link to="/layouts/homepage" className="link">
							<li className="sidebarListItem ">
								<TableChartIcon className="sidebarIcon" />
								Home Page
							</li>
						</Link>
						<Link to="/layouts/tabs" className="link">
							<li className="sidebarListItem ">
								<TableChartIcon className="sidebarIcon" />
								Tabs
							</li>
						</Link>
						<Link to="/layouts/sidenav" className="link">
							<li className="sidebarListItem">
								<ViewSidebarIcon className="sidebarIcon" />
								SideNav
							</li>
						</Link>
						<Link to="/layouts/footer" className="link">
							<li className="sidebarListItem">
								<TableChartIcon className="sidebarIcon" />
								Footer
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/orders" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Orders
							</li>
						</Link>
						<Link to="/products" className="link">
							<li className="sidebarListItem">
								<Storefront className="sidebarIcon" />
								ProductsList
							</li>
						</Link>
						<Link to="/newproduct" className="link">
							<li className="sidebarListItem">
								<Storefront className="sidebarIcon" />
								Add Products
							</li>
						</Link>
						<li className="sidebarListItem">
							<AttachMoney className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<BarChart className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutline className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeed className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<WorkOutline className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<Report className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
