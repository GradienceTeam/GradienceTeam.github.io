import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'gnome'
  | 'kde'

// Add sites to this list
// prettier-ignore
const Users: User[] = [
    {
        title: 'Crystal Clear',
        description: 'Clear theme with Crystal\'s colors',
        preview: require('./previews/crystal-clear.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/crystal-clear.json',
        tags: [ 'gnome'],
    },
    {
        title: 'Synthwave',
        description: '',
        preview: require('./previews/synthwave.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/synthwave.json',
        tags: [],
    },
    {
        title: 'Gruvbox',
        description: '',
        preview: require('./previews/gruvbox.png'),
        website: 'https://github.com/morhetz/gruvbox',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/gruvbox.json',
        tags: [],
    },
    {
        title: 'Rosé Pine',
        description: '',
        preview: require('./previews/rose-pine.png'),
        website: 'https://rosepinetheme.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/rose-pine.json',
        tags: [],
    },
    {
        title: 'Rosé Pine Moon',
        description: '',
        preview: require('./previews/rose-pine-moon.png'),
        website: 'https://rosepinetheme.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/rose-pine-moon.json',
        tags: [],
    },
    {
        title: 'Rosé Piné Dawn',
        description: '',
        preview: require('./previews/rose-pine-dawn.png'),
        website: 'https://rosepinetheme.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/rose-pine-dawn.json',
        tags: [],
    },
    {
        title: 'Dracula',
        description: '',
        preview: require('./previews/dracula.png'),
        website: 'https://draculatheme.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/dracula.json',
        tags: [],
    },
    {
        title: 'Layan Dark',
        description: '',
        preview: require('./previews/layan-dark.png'),
        website: 'https://github.com/vinceliuice/Layan-gtk-theme',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/layan-dark.json',
        tags: [],
    },
    {
        title: 'Layan Light',
        description: '',
        preview: require('./previews/layan-light.png'),
        website: 'https://github.com/vinceliuice/Layan-gtk-theme',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/layan-light.json',
        tags: [],
    },
    {
        title: 'Yaru',
        description: '',
        preview: require('./previews/yaru.png'),
        website: 'https://github.com/ubuntu/yaru',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/yaru.json',
        tags: [],
    },
    {
        title: 'Yaru Dark',
        description: '',
        preview: require('./previews/yaru-dark.png'),
        website: 'https://github.com/ubuntu/yaru',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/yaru-darl.json',
        tags: [],
    },
    {
        title: 'Nord',
        description: '',
        preview: require('./previews/nord.png'),
        website: 'https://nordtheme.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/nord.json',
        tags: [],
    },
    {
        title: 'Catppuccin Frappe',
        description: '',
        preview: require('./previews/catppuccin-frappe.png'),
        website: ' https://catppuccin.com/',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/catppuccin-frappe.json',
        tags: [],
    },
    {
        title: 'Catppuccin Latte',
        description: '',
        preview: require('./previews/catppuccin-latte.png'),
        website: ' https://catppuccin.com',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/catppuccin-latte.json',
        tags: [],
    },
    {
        title: 'Pretty Purple',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/pretty-purple.json',
        tags: ['favorite'],
    },
    {
        title: 'Builder Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/builder-light.json',
        tags: [],
    },
    {
        title: 'Builder Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/builder-dark.json',
        tags: [],
    },
    {
        title: 'Classic Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/classic-light.json',
        tags: [],
    },
    {
        title: 'Classic Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/classic-dark.json',
        tags: [],
    },
    {
        title: 'Cobalt Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/cobalt-light.json',
        tags: [],
    },
    {
        title: 'Cobalt Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/cobalt-dark.json',
        tags: [],
    },
    {
        title: 'Kate Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/classic-light.json',
        tags: [],
    },
    {
        title: 'Kate Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/classic-dark.json',
        tags: [],
    },
    {
        title: 'Oblivion',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/oblivion.json',
        tags: [],
    },
   {
        title: 'Peninsula Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/peninsula-light.json',
        tags: [],
    },
    {
        title: 'Peninsula Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/peninsula-dark.json',
        tags: [],
    },
   {
        title: 'Solarized Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/solarized-light.json',
        tags: [],
    },
    {
        title: 'Solarized Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/solarized-dark.json',
        tags: [],
    },
   {
        title: 'Gruvbox Dark',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/gruvbox-dark.json',
        tags: ['favorite'],
    },
    {
        title: 'Tango',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/tango.json',
        tags: [],
    },
    {
        title: 'Gruvbox Light',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/v2/curated/gruvbox-light.json',
        tags: [],
    },
    {
        title: 'Windows 95',
        description: '',
        preview: require('./previews/empty.png'),
        website: '',
        source: 'https://raw.githubusercontent.com/GradienceTeam/Community/next/curated/windows-95.json',
        tags: [],
    },
    


];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite presets that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  gnome: {
    label: translate({message: 'GNOME'}),
    description: translate({
      message: 'GNOME is a desktop environment for Unix-like operating systems.',
      id: 'showcase.tag.gnome.description',
    }),
    color: '#39ca30',
  },

  kde: {
    label: translate({message: 'KDE'}),
    description: translate({
      message: 'KDE is a desktop environment for Unix-like operating systems.',
      id: 'showcase.tag.kde.description',
    }),
    color: '#dfd545',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}
export const sortedUsers = sortUsers();
