This is a mono repo, we publish the component library separate from the styles/design tokens.

What are we trying to solve.
1. We are creating a component library for a design system
2. We separate the design tokens from the components to allow for 
  1. easy theming
  2. for the design to iterate on the tokens with out creating a new version of components.
3. ...

Lerna is for 
 - Versioning - incrementing the version of the document packages, it also updates the relating components that rely on the updating versions
 - Publishing - into a package that can be consumed
 - We've setup lerna to publish the packages versions independently

NX is for
 - Building all the repos, it has some nice caching 
 - Documenting the relationship between all of the packages
 - Instead of using NX we could of used npm/yarn workspaces, this helps manage the dependencies for each project

we use verdaccio to host the published packages locally
 - install it globally `npm install --location=global verdaccio`
 - run it when you're using it - `verdaccio`
 - at `http://localhost:4873/` is now a registry that we can upload our repo to (lerna is setup to do this right now)
 - you may need to set your registry to it `npm set registry http://localhost:4873/` if you change configurations
 - if you do switch your registry - verdaccio does forward packages from npm registry

