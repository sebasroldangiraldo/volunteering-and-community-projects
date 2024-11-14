import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import ProjectsTemplate from "@/ui/templates/projects-template/projects-template";

interface ProjectsPageProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    };
};

const useProjectsService = new ProjectsService();

export const generateMetadata = async ({ searchParams }: ProjectsPageProps) => {

    const page = searchParams.page ?? 1;

    return {
        title: `Projects - Page ${page}`,
        description: 'Volunteering and Community Projects'
    };
};

export default async function ProjectsPage({searchParams} : ProjectsPageProps) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 5;

    const data = await useProjectsService.find(page, size);
    console.log(data);

    return (
        <div>
            <ProjectsTemplate data={data}></ProjectsTemplate>
        </div>
    );
};