import { TechtonConfigurationLoader, Configuration, ConfigurationLoader } from "../Configuration";
import { Reader } from '../Readers';

describe("TechtonConfigurationLoader", () => {
    it('should call reader.read when load and return expected', async () => {
        // Arrange
        const mock = jest.fn();

        const expected = {
            language: 'ts',
            collection: '@techton/schematics',
        };
        
        const reader: Reader = mock.mockImplementation(() => Object.create(
            { read: jest.fn(() => Promise.resolve(JSON.stringify(expected)))}
        ))()
        
        // Act
        const loader: ConfigurationLoader = new TechtonConfigurationLoader(reader);
        const configuration: Configuration = await loader.load();

        // Assert
        expect(reader.read).toHaveBeenCalledWith('.ttcli.json');
        expect(configuration).toEqual(expected);
    })
})
