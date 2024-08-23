import { Flex, Title } from '@mantine/core';

export const TopBar = () => {
    return (
        <>
            <Flex align={'center'} justify={'space-between'}>
                <Title order={3}>CNAPP Dashboard</Title>
            </Flex>
        </>
    );
};
