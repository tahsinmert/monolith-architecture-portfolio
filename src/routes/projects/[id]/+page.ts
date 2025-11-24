import type { PageLoad } from './$types';

export const entries = async () => {
	return [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
		{ id: '4' },
		{ id: '5' }
	];
};

export const load: PageLoad = ({ params }) => {
  // Mock project data
  const projects: Record<string, any> = {
    '1': {
      title: 'VOID TOWER',
      year: '2024',
      location: 'ISTANBUL',
      area: '15,000 M²',
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=2000&fit=crop'
      ],
      nextProjectId: '2',
      nextProjectName: 'CONCRETE HORIZON'
    },
    '2': {
      title: 'CONCRETE HORIZON',
      year: '2023',
      location: 'ANKARA',
      area: '8,500 M²',
      images: [
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=2000&fit=crop'
      ],
      nextProjectId: '3',
      nextProjectName: 'BRUTALIST COMPLEX'
    },
    '3': {
      title: 'BRUTALIST COMPLEX',
      year: '2023',
      location: 'IZMIR',
      area: '12,000 M²',
      images: [
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=2000&fit=crop'
      ],
      nextProjectId: '4',
      nextProjectName: 'MONOLITHIC STRUCTURE'
    },
    '4': {
      title: 'MONOLITHIC STRUCTURE',
      year: '2022',
      location: 'BODRUM',
      area: '6,200 M²',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=2000&fit=crop'
      ],
      nextProjectId: '5',
      nextProjectName: 'GEOMETRIC VOID'
    },
    '5': {
      title: 'GEOMETRIC VOID',
      year: '2022',
      location: 'ANTALYA',
      area: '9,800 M²',
      images: [
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=2000&fit=crop'
      ],
      nextProjectId: '1',
      nextProjectName: 'VOID TOWER'
    }
  };

  const project = projects[params.id] || projects['1'];

  return {
    project
  };
};
