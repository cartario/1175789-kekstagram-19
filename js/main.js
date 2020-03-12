'use strict';

(function () {

  var TOTAL_PHOTOS = 25;

  var MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  var NAMES = [
    'Артем1',
    'Артем2',
    'Артем3',
    'Артем4',
    'Артем5',
    'Артем6'
  ];

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };


  var generatePhoto = function (total) {

    var photos = [];
    for (var i = 0; i < total; i++) {
      var photo =
      {
        url: 'photos/' + i + '.jpg',
        description: 'Красивое фото - ' + i,
        likes: getRandomInt(i, 100),
        comments: {
          avatar: 'img/avatar-' + i + '.svg',
          message: MESSAGES[i],
          name: NAMES[i]
        }
      };


      photos.push(photo);
    }

    return photos;

  };

  generatePhoto(TOTAL_PHOTOS);

})();
