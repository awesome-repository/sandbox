import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries:[
    {
      input:'./src/ni.ts',
      name:'index'
    }
  ],
  clean:true,
  declaration:true,
  rollup:{
    emitCJS:true,
    inlineDependencies:true
  }
})
