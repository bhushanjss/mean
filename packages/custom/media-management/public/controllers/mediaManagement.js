'use strict';

/* jshint -W098 */
angular.module('mean.media-management').controller('MediaManagementController', ['$scope', 'Global', 'MediaManagement', 'Upload', 'cloudinary', 
  function($scope, Global, MediaManagement, $upload, cloudinary) {
    $scope.global = Global;
    $scope.package = {
      name: 'media-management'
    };
    var userId = 1;
    //$scope.$watch('files', function() {
    $scope.uploadFiles = function(files)
    {
    var d = new Date();    
    var dateId = d.getDate() + "-" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var folderId = userId + "/" + dateId;
    var tagId = userId+"-"+dateId;
    $scope.title = "Image-" + dateId + ")";
      $scope.files = files;
      if (!$scope.files) return;
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = $upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: tagId,
              context: 'photo=' + $scope.title,
              folder : folderId,
              file: file
            }
          }).progress(function (e) {
            file.progress = Math.round((e.loaded * 100.0) / e.total);
            file.status = "Uploading... " + file.progress + "%";
          }).success(function (data, status, headers, config) {
            $rootScope.photos = $rootScope.photos || [];
            data.context = {custom: {photo: $scope.title}};
            file.result = data;
            $rootScope.photos.push(data);
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    };
    //});

    /* Modify the look and fill of the dropzone when files are being dragged over it */
    $scope.dragOverClass = function($event) {
      var items = $event.dataTransfer.items;
      var hasFile = false;
      if (items != null) {
        for (var i = 0 ; i < items.length; i++) {
          if (items[i].kind == 'file') {
            hasFile = true;
            break;
          }
        }
      } else {
        hasFile = true;
      }
      return hasFile ? "dragover" : "dragover-err";
    };
  }
]);
