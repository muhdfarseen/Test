import { Paper, Modal, TextInput, Button, Group } from '@mantine/core';
import { TopBar } from '../ui/TopBar';
import { Category } from '../ui/Category';
import { useState } from 'react';

export const Dashboard = () => {
    const [data, setData] = useState([
        {
            category: 'CSPM Dashboard',
            cardData: []
        },
        {
            category: 'CWPP Dashboard',
            cardData: []
        },
        {
            category: 'Image Dashboard',
            cardData: []
        },
        {
            category: 'Ticket Dashboard',
            cardData: []
        }
    ]);

    const [opened, setOpened] = useState(false);
    const [newWidget, setNewWidget] = useState({ category: '', title: '', description: '' });

    const handleOpenModal = (category) => {
        setNewWidget({ ...newWidget, category });
        setOpened(true);
    };

    const handleAddWidget = () => {
        const updatedData = data.map((item) => {
            if (item.category === newWidget.category) {
                return {
                    ...item,
                    cardData: [...item.cardData, { title: newWidget.title, description: newWidget.description }]
                };
            }
            return item;
        });

        setData(updatedData);
        setOpened(false);
        setNewWidget({ category: '', title: '', description: '' });
    };

    const handleDeleteWidget = (category, title) => {
        const updatedData = data.map((item) => {
            if (item.category === category) {
                return {
                    ...item,
                    cardData: item.cardData.filter((widget) => widget.title !== title)
                };
            }
            return item;
        });

        setData(updatedData);
    };

    return (
        <>
            <Paper mih={'100vh'} p={20} bg={'#EBF0F5'}>
                <TopBar />

                {data.map((item) => (
                    <Category
                        key={item.category}
                        category={item.category}
                        data={item.cardData}
                        onAddWidget={handleOpenModal}
                        onDeleteWidget={handleDeleteWidget}
                    />
                ))}
            </Paper>

            <Modal radius={'lg'} opened={opened} onClose={() => setOpened(false)} title='Add New Widget'>
                <TextInput
                    radius={'md'}
                    label='Widget Title'
                    placeholder='Enter widget title'
                    value={newWidget.title}
                    onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
                />
                <TextInput
                    radius={'md'}
                    label='Description'
                    placeholder='Enter description'
                    value={newWidget.description}
                    onChange={(e) => setNewWidget({ ...newWidget, description: e.target.value })}
                    mt='md'
                />
                <Group justify='end' mt='md'>
                    <Button color='green' radius={'md'} onClick={handleAddWidget}>
                        Add Widget
                    </Button>
                </Group>
            </Modal>
        </>
    );
};
