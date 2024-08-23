import { Card, SimpleGrid, Title, Text, Flex, Group, ActionIcon } from '@mantine/core';
import { IconPlus, IconSquareRoundedX } from '@tabler/icons-react';

export const Category = ({ category, data, onAddWidget, onDeleteWidget }) => {
    return (
        <>
            <Title order={5} mt={20}>
                {category}
            </Title>

            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
                mt={10}>
                {data?.map((item) => (
                    <Card key={item.title} radius={'lg'}>
                        <Group align='center' wrap='wrap' justify='space-between'>
                            <Title order={6}>{item.title}</Title>
                            <ActionIcon size={'lg'} variant='transparent' color='red' onClick={() => onDeleteWidget(category, item.title)}>
                                <IconSquareRoundedX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                        </Group>

                        <Text mt={5} c={'dimmed'} size='sm'>
                            {item.description}
                        </Text>
                    </Card>
                ))}

                <Card opacity={0.5} radius={'lg'} onClick={() => onAddWidget(category)} style={{ cursor: 'pointer' }}>
                    <Flex h={'100%'} align={'center'} justify={'center'}>
                        <Group align='center' justify='center'>
                            <IconPlus color={'gray'} size={14} />
                            <Text c={'dimmed'}>Add Widget</Text>
                        </Group>
                    </Flex>
                </Card>
            </SimpleGrid>
        </>
    );
};
