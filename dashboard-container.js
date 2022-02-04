/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import * as actions from '../../core/common/apppref-actions';
import fuLogger from '../../core/common/fu-logger';
import DashboardView from '../../memberView/dashboard/dashboard-view';

function DashboardContainer() {
	const session = useSelector((state) => state.session);
	const appMenus = useSelector((state) => state.appMenus);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	

	fuLogger.log({level:'TRACE',loc:'DashboardContainer::render',msg:"Hi there"});
    return (
		<DashboardView/>
	);
 
}


export default DashboardContainer;
