import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'material-ui';
import Localized from './localization/Localized';
import { routes as routesConfig } from '../routes/routes.config';

export const PageTitle = ({currentPath}) => {
  const routeConfig = routesConfig.find(route => route.path === currentPath);
  const localizedLabel = routeConfig ? routeConfig.titleLocalizationLabel : 'TITLE';
  return <Typography variant="title" color="inherit" style={{paddingLeft: '1rem'}}>
    <Localized>{localizedLabel}</Localized>
  </Typography>;
};
PageTitle.propTypes = {
  currentPath: PropTypes.string
};
