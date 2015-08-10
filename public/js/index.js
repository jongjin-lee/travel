$(window).load(function() {
    var mapOptions = {
        center: { lat: 1.284183, lng: 103.838086},
        zoom: 13
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
	});

	setMarkers(map, spots); // 데이터와 지도 하나씩 파라미터로 넣어줌
	
});


var markers = [];
var infos =[];
var spots = [
  ['마리나 베이 샌즈', // 장소명 0
  1.283568,  // 위도 1
  103.859545,  // 경도 2 
  4, // z 좌표 3
  '/public/image/thumb/1.jpg', // 썸네일 이미지 4
  '상세설명<br/>조금더 긴 글을 입력해봅시다.',  // 설명5
  2]
];


function setMarkers(map, locations) {  // what is location? , location == spots
     var shape = {
      coords: [0, 0, 
      0, 75, 
      75, 75, 
      75 , 0],
        type: 'poly'
    };
    
    for (var i = 0; i < locations.length; i++) {  
        
        var spot = locations[i];
        
        var image = { 
            url: spot[4],
            // This marker is 20 pixels wide by 32 pixels tall.
            size: new google.maps.Size(75, 75),
            // The origin for this image is 0,0.
            origin: new google.maps.Point(0,0),
            // The anchor for this image is the base of the flagpole at 0,32.
            anchor: new google.maps.Point(0, 75),
            scaledSize: new google.maps.Size(75, 75)
        };
        
        
        var myLatLng = new google.maps.LatLng(spot[1], spot[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            title: spot[0],
            zIndex: spot[3],
            optimized:false
        });
        var infowindow = new google.maps.InfoWindow({
            content: ''
        });
        
        google.maps.event.addListener(marker,'click', (function(marker,spot,i){ 
            return function() {
                
            };
        })(marker,spot,i)); 
    }

