import React from 'react';
import { Menu, MenuItem,  IconButton, IconMenu } from 'material-ui';
import SocialPublic from 'material-ui/svg-icons/social/public';
import cookie from 'react-cookie';
import {_i18n} from '../locales/_i18n';

function renderLocalePage(value) {
  // Save locale info into cookie
  cookie.save('usrLocale', value);
  // Reload page
  window.location.reload();
}

export default class LocaleSelector extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : this.props.locale,
    };
  }

  handleChange(event, value){
    this.setState({value: value});
    renderLocalePage(value);
  }

  render(){
    const language = [
      <MenuItem key={1} value={"en"} primaryText="English" />,
      <MenuItem key={2} value={"zh"} primaryText="简体中文" />,
      <MenuItem key={3} value={"zh-Hant"} primaryText="繁體中文" />,
    ];

    const iconBtn = <IconButton tooltip={_i18n.locale} tooltipPosition='top-left'>
                      <SocialPublic color="white" />
                    </IconButton>;

    return(
      <div>
        <IconMenu
          iconButtonElement={iconBtn}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          onChange={this.handleChange.bind(this)}
        >
          {language}
        </IconMenu>
      </div>
    );
  }
}