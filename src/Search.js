import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
  constructor() {
      super();
  }

  componentDidMount() {
    const cityName = 'Tor';
    axios({
        method: 'GET',
        url: 'https://proxy.hackeryou.com',
        dataType: 'json',
        params: {
            method: 'GET',
            reqUrl: `http://gd.geobytes.com/AutoCompleteCity?q=${cityName}&sort=size`,
            proxyHeaders: {
                header_params: 'value'
            },
            xmlToJSON: false,
            useCache: false
        }
    }).then(res => {
        console.log(res);
    });
}

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
      return(
        <h1>hello</h1>
      )
   }
}

export default Search;

// [raw]
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
// <link rel="stylesheet" href="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/themes/flick/jquery-ui.css" />
//  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
// <style type="text/css">
// .ui-menu .ui-menu-item a,.ui-menu .ui-menu-item a.ui-state-hover, .ui-menu .ui-menu-item a.ui-state-active {
// 	font-weight: normal;
// 	margin: -1px;
// 	text-align:left;
// 	font-size:14px;
// 	}
// .ui-autocomplete-loading { background: white url("/images/ui-anim_basic_16x16.gif") right center no-repeat; }
// </style>
 
// <script type="text/javascript">
 
// jQuery(function () 
//  {
// 	 jQuery("#f_elem_city").autocomplete({
// 		source: function (request, response) {
// 		 jQuery.getJSON(
// 			"https://secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&callback=?&q="+request.term,
// 			function (data) {
// 			 response(data);
// 			}
// 		 );
// 		},
// 		minLength: 3,
// 		select: function (event, ui) {
// 		 var selectedObj = ui.item;
// 		 jQuery("#f_elem_city").val(selectedObj.value);
// 		getcitydetails(selectedObj.value);
// 		 return false;
// 		},
// 		open: function () {
// 		 jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
// 		},
// 		close: function () {
// 		 jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
// 		}
// 	 });
// 	 jQuery("#f_elem_city").autocomplete("option", "delay", 100);
// 	});
// </script>
// <form action="" method="post" name="form_citydetails" id="form_citydetails" enctype="multipart/form-data" onsubmit="return false;">
// <p><b>Please enter</b> your city here to see it work. <input class="ff_elem" type="text" name="ff_nm_from[]" value="" id="f_elem_city"/>
// </form>
// [/raw]