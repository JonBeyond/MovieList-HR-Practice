// import React from 'react'

var MovieListEntry = () => React.createElement(
  "div",
  { className: "video-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: "https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg", alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "video-list-entry-title" },
      "Video Title"
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      "Video Description"
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
//   MovieListEntry.propTypes = {
//     movie: React.PropTypes.object.isRequired
//   };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllZW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdEVudHJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxpQkFBaUIsTUFDakI7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUJBQWY7QUFDRSxpQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSSxnREFBbEMsRUFBbUYsS0FBSSxFQUF2RjtBQURGLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUFBO0FBQUE7QUFGRjtBQUpGLENBREo7O0FBWUU7QUFDQTtBQUNGO0FBQ0E7QUFDQTs7QUFFRTtBQUNBO0FBQ0EsZUFBZUEsY0FBZiIsImZpbGUiOiJtb3ZpZWVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG52YXIgTW92aWVMaXN0RW50cnkgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8xdzhaMFVPWFZhWS9kZWZhdWx0LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIj5WaWRlbyBUaXRsZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+VmlkZW8gRGVzY3JpcHRpb248L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIC8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbiAgLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuLy8gICBNb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4vLyAgICAgbW92aWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuLy8gICB9O1xuXG4gIC8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbiAgLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0RW50cnk7XG4iXX0=