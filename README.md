## Thoughts

I started the problem by wrtiting a presentational react card component and marking HTML tags which should have loading animation.

### Implement Shimmer Animation

I could attach a css class or data attribute to mark those HTML tags and write css rules to have the loader animation. I choose to attach data attribute as this feels like an additional info to those HTML tags.

I added a parent div with css class that decides when its child tag containing data-loader attribute will turn into shimmer. But i am still attaching data-loader attribute inside the presentational component mannually. We need to figure out a way to add data attribute programatically.

### Skeleton component as a independent component

As per problem statement, we need a component that can wrap any other component to have a shimmer effect. High order component and composition patterns came in my mind to implement this. I choose composition because this make code more declarative, less cryptic and easier to understand. I also set opacity 0 to hide the component till the component is mounted

### Figure out leaf nodes and add data attribute for marking

Now for the main problem, we understand that we would like to turn leaf nodes of component's DOM into shimmer. First, i tried to figure out leaf nodes with React.Children APIs but it returns React components not the DOM node. so i tried the vanila JS approach to figure out leaf node of component's DOM and added data attribute to DOM nodes.

### Add support for _img_ tag

One more challenge i faced in adding support for _img_ tag. First i thought of doing some DOM manipulation to hide img node with div and setting width, height equals to img but this looks complicated. so tried to figure out any simpler solution. Initially, i was trying to use empty string src in dummy data for image. But because of this i was getting broken image icon in chrome. so i decided to have 1x1 transparent PNG data URI as valid dummy data for image.

### Clean up

Initially i made Skeleton component as stateful to know when the component is mounted but lated realized that same can be achieved through container ref. So Skeleton component is a stateless now.

### Further Improvements

- Method for calculating leaf node can be moved to a util module.
- Skeleton component can be memoized with React.memo.
- Add support for theming in skeleton
