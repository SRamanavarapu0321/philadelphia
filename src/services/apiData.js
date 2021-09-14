import axios from 'axios';

const getHomeData = ()=> {

/* open this axios call to get data from api */
 axios
 .get(`http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/pages/v2/archive?id=23`)
 .then((res)=>{
    console.log(res);
 	  return res;
 })
 .catch((err)=>{

 	console.error(err)
 })

/* remove this return once you open the api above */
/*return {

   "id": 23,
  "title": "Spring into Love",
  "status": "publish",
  "slug": "home",
  "content": "",
  "short_description": "",
  "bg_color": "#c6f1ff",
  "page_content": [{
    "selected_option": {
      "phila_page_content_select": "phila_homepage_image",
      "phila_accordion": {
        "accordion_sections": [{
          "section_content_select": [{
            "the_three_fifth_option": [{
              "side_content": {
                "hours_display": "1"
              }
            }]
          }]
        }]
      },
      "phila_homepage_image": {
        "image": ["42"]
      },
      "phila_features_and_attractions": {
        "attractions": [{
          "_index_attraction_image": "_file_611aaf9153a8e"
        }]
      },
      "phila_sponsors_and_partners": {
        "sponsors_partners": [{
          "_index_the_logo": "_file_611aaf9153cb8"
        }]
      }
    }
  }, {
    "selected_option": {
      "phila_page_content_select": "phila_single_wysiwyg",
      "phila_single_wysiwyg": {
        "phila_wysiwyg": "Located in the heart of Center City, LOVE Park is a year-round destination for locals and visitors alike. The park features free games, live entertainment, and accessible green space. It\u2019s a place to mingle\u2014and on Wedding Wednesdays, to marry!"
      },
      "phila_features_and_attractions": {
        "attractions": [{
          "_index_attraction_image": "_file_611aaf9154c9e"
        }]
      },
      "phila_sponsors_and_partners": {
        "sponsors_partners": [{
          "_index_the_logo": "_file_611aaf9154ebd"
        }]
      }
    }
  }, {
    "selected_option": {
      "phila_page_content_select": "phila_features_and_attractions",
      "phila_features_and_attractions": {
        "things_to_do": "Things to do",
        "attractions": [{
          "title": "Arts and culture",
          "icon": "fas fa-paint-brush",
          "description": "<div class=\"columns\">\r\n<div class=\"column features-column\">\r\n<div class=\"pt-2 features-description\">Snap a photo with the\u00a0<em>LOVE<\/em> sculpture, a Philly favorite since 1976.<\/div>\r\n<\/div>\r\n<\/div>",
          "attraction_image": ["46"],
          "_index_attraction_image": "_file_611aaf9155e5b"
        }, {
          "title": "Games and play",
          "icon": "fas fa-table-tennis",
          "description": "Borrow a free board game, challenge a friend to ping-pong, or cool off in the fountain. It\u2019s up to you!",
          "attraction_image": ["47"],
          "_index_attraction_image": "_file_611aaf9156443"
        }, {
          "title": "Food trucks",
          "icon": "fas fa-utensils-alt",
          "description": "Sample the flavors of Philly at Lunch in LOVE, where food trucks offer all things sweet and savory.",
          "attraction_image": ["48"],
          "_index_attraction_image": "_file_611aaf91569ad"
        }]
      },
      "phila_sponsors_and_partners": {
        "sponsors_partners": [{
          "_index_the_logo": "_file_611aaf9156e82"
        }]
      }
    }
  }]
}*/

}

const getAboutData = ()=> {

/* open this axios call to get data from api */
 return axios.get(`http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/pages/v2/archive?id=27`)

	/* remove this return once you open the api above */
/*
	return {
        "id": 27,
        "title": "About",
        "status": "publish",
        "slug": "about",
        content: "<p>LOVE Park has been a centerpiece of Philadelphia&#8217;s urban landscape for more than 50 years. In that time, it&#8217;s become part of daily life in Center City, as well as a backdrop for public demonstrations and popular festivals.<\/p>\n<h2>History<\/h2>\n<p>Dedicated as John. F. Kennedy Plaza in 1967, the park was designed by Edmund Bacon and Vincent G. Kling. Its central location and iconic views soon made it a favorite gathering place.<\/p>\n<p>The\u00a0<em>LOVE<\/em>\u00a0sculpture was added to the park for the nation\u2019s bicentennial. Created by Robert Indiana, the artwork became a fixture when F. Eugene Dixon, Jr., Chairman of the Philadelphia Art Commission, purchased it as a gift to the City.<\/p>\n<p>In 2016, renovations began at LOVE Park. The improvements included an accessible design, new fountains, and more opportunities for play. Even the\u00a0<em>LOVE\u00a0<\/em>sculpture received a makeover, returning to its original red, green, and purple color scheme.<\/p>\n<p>The park officially reopened in 2018. A typical summer afternoon finds city workers enjoying live music on their lunch hour, while visitors cool off in the fountains, play ping-pong, or take photos. Stop by and find out what makes LOVE Park the park that loves you back!<\/p>\n<h2>Use the park<\/h2>\n<p>To use LOVE Park for a demonstration, protest, or other event, you\u2019ll need a permit from Philadelphia Parks &amp; Recreation. You may also need permits from other City agencies. For more information, contact the Parks &amp; Rec Special Events Office at (215) 685-0060.<\/p>\n<p>If you&#8217;d like to hold your marriage ceremony at the\u00a0<em>LOVE<\/em>\u00a0sculpture, you can sign up for\u00a0<a href=\"http:\/\/stagelocation.wpengine.com\/tags\/wedding-wednesdays\/\">Wedding Wednesdays<\/a>. Learn more about\u00a0<a href=\"http:\/\/stagelocation.wpengine.com\/events\/tag\/wedding-wednesdays\/\">getting married at LOVE Park<\/a>.<\/p>\n",
        "short_description": "",
        "bg_color": "#fffabb",
        "page_content": [{
          "selected_option": {
            "phila_accordion": {
              "accordion_sections": [{
                "section_content_select": [{
                  "the_three_fifth_option": [{
                    "side_content": {
                      "hours_display": "1"
                    }
                  }]
                }]
              }]
            },
            "phila_features_and_attractions": {
              "attractions": [{
                "_index_attraction_image": "_file_611570df13d90"
              }]
            },
            "phila_sponsors_and_partners": {
              "sponsors_partners": [{
                "_index_the_logo": "_file_611570df13fc3"
              }]
            }
          }
        }]
      }*/
}

export  {
	getHomeData,
	getAboutData
}