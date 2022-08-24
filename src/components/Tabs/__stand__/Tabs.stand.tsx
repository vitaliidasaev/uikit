import { createStand } from '##/stand/standConfig';

import image from './Tabs.image.svg';

export default createStand({
  title: 'Tabs',
  id: 'Tabs',
  group: 'components',
  image,
  description: 'Табы. Навигация по вкладкам.',
  version: '4.0.0',
  status: 'stable',
  sandbox:
    'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  figma:
    'https://www.figma.com/embed?embed_host=uikit.consta.design&url=https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=12745%3A116509',
  order: 10,
});
