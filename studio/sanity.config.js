import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { deskStructure } from './components/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'astro',

  projectId: 'p4rgm4d5',
  dataset: 'production',

  plugins: [structureTool({structureTool: deskStructure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
